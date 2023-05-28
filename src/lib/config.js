const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const sanityConfig = {
  dataset,
  projectId,
  useCdn: true,
  apiVersion: '2023-05-28',
};
