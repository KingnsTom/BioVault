import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';
import sanityClient from '@sanity/client';
import { Readable } from 'stream';
import 'dotenv/config';

const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  useCdn: false,
  apiVersion: '2025-07-01',
});

async function uploadImageFromUrl(url) {
  try {
    const res = await fetch(url);
    if (!res.ok || !res.body) throw new Error(`Failed to fetch image: ${url}`);
    const asset = await client.assets.upload(
      'image',
      Readable.fromWeb(res.body),
      { filename: path.basename(url) }
    );
    return {
      _type: 'image',
      asset: { _type: 'reference', _ref: asset._id },
    };
  } catch (err) {
    console.warn('⚠️ Image upload failed:', url, err.message);
    return null;
  }
}

function getBlockStyle(tag) {
  switch (tag.toLowerCase()) {
    case 'h1': return 'h1';
    case 'h2': return 'h2';
    case 'h3': return 'h3';
    default: return 'normal';
  }
}

async function importPosts() {
  const blogDir = path.join(process.cwd(), '..', 'blog');
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.html'));

  for (const file of files) {
    const filePath = path.join(blogDir, file);
    const html = fs.readFileSync(filePath, 'utf-8');
    const dom = new JSDOM(html);
    const doc = dom.window.document;

    const title = doc.querySelector('title')?.textContent?.trim() || 'Untitled Post';
    const excerpt = doc.querySelector('meta[name="description"]')?.content || '';
    const slug = file.replace(/\.html$/, '');

    const body = [];
    const faq = [];

    const contentNodes = doc.querySelectorAll('p, h1, h2, h3, img, ul, ol, table, blockquote, details');

    for (const node of contentNodes) {
      const tag = node.tagName.toLowerCase();

      // ✅ Image
      if (tag === 'img') {
        const src = node.getAttribute('src');
        if (src) {
          const image = await uploadImageFromUrl(src);
          if (image) body.push(image);
        }
        continue;
      }

      // ✅ Table
      if (tag === 'table') {
        const rows = [...node.querySelectorAll('tr')].map(tr =>
          [...tr.querySelectorAll('td, th')].map(td => td.textContent.trim())
        );
        if (rows.length) {
          body.push({
            _type: 'table',
            rows,
          });
        }
        continue;
      }

      // ✅ Blockquote
      if (tag === 'blockquote') {
        const quoteText = node.textContent.trim();
        if (quoteText) {
          body.push({
            _type: 'block',
            style: 'blockquote',
            children: [{ _type: 'span', text: quoteText }],
          });
        }
        continue;
      }

      // ✅ FAQ (from <details><summary>)
      if (tag === 'details') {
        const question = node.querySelector('summary')?.textContent?.trim();
        const answer = [...node.childNodes]
          .filter(n => n.nodeType === 1 && n.tagName !== 'SUMMARY')
          .map(n => n.textContent.trim())
          .join('\n');

        if (question && answer) {
          faq.push({ question, answer });
        }
        continue;
      }

      // ✅ Paragraphs, Lists, Headings
      const text = node.textContent.trim();
      if (text) {
        body.push({
          _type: 'block',
          style: getBlockStyle(tag),
          children: [{ _type: 'span', text }],
        });
      }
    }

    const postDoc = {
      _type: 'post',
      title,
      slug: { current: slug },
      excerpt: excerpt || title.slice(0, 160),
      publishedAt: new Date().toISOString(),
      body,
      faq,
    };

    try {
      await client.createIfNotExists({ _type: 'post', slug: postDoc.slug }, postDoc);
      console.log(`✅ Imported: ${slug}`);
    } catch (err) {
      console.error(`❌ Failed to import ${slug}:`, err.message);
    }
  }
}

importPosts().catch(err => {
  console.error('🔥 Import script crashed:', err.message);
});
