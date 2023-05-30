import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import { structure } from './deskStructure';
import { visionTool } from '@sanity/vision';

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET;

export default defineConfig({
  title: 'millap-sanity',
  projectId,
  dataset,
  plugins: [deskTool({ structure }), visionTool()],
  tools: (prev) => {
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== 'vision');
  },
  schema: {
    types: schemas,
  },
  parts: [
    {
      implements: 'part:@sanity/base/theme/variables/override-style',
      path: 'variableOverrides.css',
    },
  ],
});
