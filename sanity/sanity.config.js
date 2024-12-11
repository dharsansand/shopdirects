// ./sanity.config.js

import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemaTypes/index.js';  // Import schemaTypes

export default defineConfig({
  name: 'default',
  title: 'admin-shop',

  projectId: '56vllltl',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,  // Pass schemaTypes here
  },
});
