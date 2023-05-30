const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID;
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET;

export const sanityConfig = {
  dataset,
  projectId,
  useCdn: true,
  apiVersion: '2023-05-28',
};
