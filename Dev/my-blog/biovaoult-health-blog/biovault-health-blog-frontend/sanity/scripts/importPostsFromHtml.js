import fs from 'fs'
import path from 'path'
import { JSDOM } from 'jsdom'
import sanityClient from '@sanity/client'
import { Readable } from 'stream'
import fetch from 'node-fetch'
import 'dotenv/config'

// 🚨 Replace with your actual Sanity author ID
const DEFAULT_AUTHOR_ID = process.env.SANITY_AUTHOR_ID || ''
if (!DEFAULT_AUTHOR_ID) {
  throw new Error('❌ Missing DEFAULT_AUTHOR_ID. Set SANITY_AUTHOR_ID in .env')
}

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2025-07-01',
})

const CATEGORY_SLUG_MAP = {
  gut: 'gut-health',
  sleep: 'sleep',
  energy: 'energy-immunity',
  brain: 'mental-clarity',
}

async function uploadImageFromUrl(url) {
  try {
    const res = await fetch(url)
    if (!res.ok || !res.body) throw new Error(`Failed to fetch image: ${url}`)

    const asset = await client.assets.upload(
      'image',
      Readable.fromWeb(res.body),
      { filename: path.basename(url) }
    )

    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    }
  } catch (err) {
    console.warn('⚠️ Image upload failed:', url, err.message)
    return null
  }
}

async function getCategoryReference(slug) {
  const category = await client.fetch(
    `*[_type == "category" && slug.current == $slug][0]`,
    { slug }
  )

  if (category && category._id) {
    return {
      _type: 'reference',
      _ref: category._id,
    }
  }

  const newCategory = await client.create({
    _type: 'category',
    title: slug.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()),
    slug: { current: slug },
  })

  return {
    _type: 'reference',
    _ref: newCategory._id,
  }
}

function getBlockStyle(tag) {
  switch (tag.toLowerCase()) {
    case 'h1':
      return 'h1'
    case 'h2':
      return 'h2'
    case 'h3':
      return 'h3'
    default:
      return 'normal'
  }
}

async function importPosts() {
  const blogDir = path.resolve(process.cwd(), 'blog')
  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith('.html'))

  for (const file of files) {
    const filePath = path.join(blogDir, file)
    const html = fs.readFileSync(filePath, 'utf-8')
    const dom = new JSDOM(html)
    const doc = dom.window.document

    const title = doc.querySelector('title')?.textContent?.trim() || 'Untitled'
    const excerpt = doc.querySelector('meta[name="description"]')?.content || ''
    const slug = file.replace(/\.html$/, '')
    const slugLower = slug.toLowerCase()

    const categoryKey = Object.keys(CATEGORY_SLUG_MAP).find((k) =>
      slugLower.includes(k)
    )
    const categorySlug = categoryKey
      ? CATEGORY_SLUG_MAP[categoryKey]
      : 'uncategorized'
    const categoryRef = await getCategoryReference(categorySlug)

    const firstImg = doc.querySelector('img')
    const mainImageRef =
      firstImg && firstImg.src ? await uploadImageFromUrl(firstImg.src) : null

    const body = []
    const contentNodes = doc.querySelectorAll('p, h1, h2, h3, img, ul, ol')

    for (const node of contentNodes) {
      if (node.nodeName === 'IMG') {
        const src = node.getAttribute('src')
        if (src) {
          const img = await uploadImageFromUrl(src)
          if (img) body.push(img)
        }
      } else {
        const text = node.textContent?.trim()
        if (text) {
          body.push({
            _type: 'block',
            style: getBlockStyle(node.nodeName),
            children: [{ _type: 'span', text }],
          })
        }
      }
    }

    if (body.length === 0) {
      body.push({
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Content coming soon.' }],
      })
    }

    const exists = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]`,
      { slug }
    )

    if (exists) {
      console.log(`⚠️ Skipped existing post: ${slug}`)
      continue
    }

    const postDoc = {
      _type: 'post',
      title,
      slug: { current: slug },
      excerpt: excerpt || title.slice(0, 160),
      publishedAt: new Date().toISOString(),
      categories: [categoryRef],
      author: {
        _type: 'reference',
        _ref: DEFAULT_AUTHOR_ID,
      },
      mainImage: mainImageRef,
      body,
    }

    try {
      await client.create(postDoc)
      console.log(`✅ Imported: ${slug}`)
    } catch (err) {
      console.error(`❌ Failed to import ${slug}:`, err.message)
    }
  }
}

importPosts().catch((err) => {
  console.error('🔥 Import failed:', err.message)
})
