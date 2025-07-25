// scripts/fixAuthorReferences.js
import { createClient } from '@sanity/client'
import 'dotenv/config'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2025-07-01',
  useCdn: false,
})

const AUTHOR_NAME = 'Jane Michaels'

async function fixAuthors() {
  // 1. Find or create the author document
  let author = await client.fetch(
    `*[_type == "author" && name == $name][0]`,
    { name: AUTHOR_NAME }
  )

  if (!author?._id) {
    console.warn(`⚠️ Author "${AUTHOR_NAME}" not found. Creating a new one...`)
    author = await client.create({
      _type: 'author',
      name: AUTHOR_NAME,
      slug: { current: AUTHOR_NAME.toLowerCase().replace(/\s+/g, '-') },
    })
    console.log(`✅ Created author "${AUTHOR_NAME}" with ID ${author._id}`)
  }

  // 2. Find all posts where author is still a string
  const posts = await client.fetch(
    `*[_type == "post" && author == $name]`,
    { name: AUTHOR_NAME }
  )

  if (!posts.length) {
    console.warn(`⚠️ No posts found with author as string "${AUTHOR_NAME}". Nothing to update.`)
    return
  }

  // 3. Update each post to reference the author
  for (const post of posts) {
    await client
      .patch(post._id)
      .set({ author: { _type: 'reference', _ref: author._id } })
      .commit()
    console.log(`✅ Updated post "${post.title}" to use author reference`)
  }
}

fixAuthors().catch((err) => {
  console.error('🔥 Script error:', err.message)
})
