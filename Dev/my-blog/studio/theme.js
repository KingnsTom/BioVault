// sanity.config.ts or sanity.config.js
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { theme } from './theme' // adjust path if necessary

export default defineConfig({
  name: 'default',
  title: 'My Blog',
  projectId: 'your_project_id',
  dataset: 'production',
  plugins: [deskTool()],
  theme, // 👈 apply your custom theme here
})
