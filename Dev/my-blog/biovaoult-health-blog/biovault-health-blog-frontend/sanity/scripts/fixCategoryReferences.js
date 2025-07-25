import { createClient } from '@sanity/client'
import 'dotenv/config'

const client = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: '2025-07-01',
  useCdn: false,
})

async function fixCategoryReferences() {
  // Fetch posts where categories array contains strings or invalid values
  const posts = await client.fetch(`*[_type == "post" && categories[0] match "*"]`)

  for (const post of posts) {
    const fixedCategories = []

    for (const cat of post.categories || []) {
      if (typeof cat === 'string') {
        // If category is a string, assume it's a slug — fetch the category doc
        const category = await client.fetch(
          `*[_type == "category" && slug.current == $slug][0]`,
          { slug: cat }
        )

        if (category?._id) {
          // Replace string with proper reference object
          fixedCategories.push({
            _type: 'reference',
            _ref: category._id,
          })
        } else {
          console.warn(`⚠️ Category not found for slug "${cat}" in post "${post.title}"`)
        }
      } else if (cat?._type === 'reference' && cat._ref) {
        // Already a valid reference, keep it
        fixedCategories.push(cat)
      } else {
        console.warn(`⚠️ Unexpected category value in post "${post.title}":`, cat)
      }
    }

    if (fixedCategories.length) {
      // Update the post with fixed categories array
      await client.patch(post._id).set({ categories: fixedCategories }).commit()
      console.log(`✅ Fixed categories for post: "${post.title}"`)
    }
  }
}

fixCategoryReferences().catch(err => {
  console.error('🔥 Script error:', err)
})
