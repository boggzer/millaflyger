import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';
import { structure } from './deskStructure';
import { visionTool } from '@sanity/vision';
//import { createImprovedPublishAction } from './utils/helpers'

const projectId = import.meta.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = import.meta.env.NEXT_PUBLIC_SANITY_DATASET

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
/*   document: {
    actions: (prev) =>
      prev.map((originalAction) => (originalAction.action === 'publish' ? createImprovedPublishAction(originalAction) : originalAction)),
  }, */
});
