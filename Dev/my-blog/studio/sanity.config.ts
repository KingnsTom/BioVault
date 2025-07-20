import { defineConfig } from 'sanity'
import { visionTool } from '@sanity/vision'
import { deskTool } from 'sanity/desk'
import { theme } from './theme' // make sure this file exists

export default defineConfig({
  name: 'default',
  title: 'BioVault Studio',
  projectId: 'xq1ttmr8', // ✅ KEEP your actual projectId
  dataset: 'production',
  plugins: [deskTool(), visionTool()],
  theme: theme, // ✅ this applies your global styles
})
