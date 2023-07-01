import {
  getIndexPage,
  getProjectBySlug,
  getProjectSlugs,
  getProjects,
} from '../lib/queries';
import { getClient } from '../lib/getClient';

export const fetchIndexPage = async (previewToken?: string) =>
  await getClient(previewToken).fetch(getIndexPage);

export const fetchProjectSlugs = async (previewToken?: string) =>
  await getClient(previewToken).fetch(getProjectSlugs);

export const fetchProject = async (slug: string, previewToken?: string) =>
  await getClient(previewToken).fetch(getProjectBySlug, {
    slug,
  });

export const fetchProjects = async (previewToken?: string) =>
  await getClient(previewToken).fetch(getProjects);

export const getPreview = (context) => {
  const preview = context.draftMode || false;
  const previewToken = preview ? process.env.SANITY_READ_TOKEN : ``;
  if (preview && !previewToken) {
    throw new Error(
      `Preview mode is active, but SANITY_READ_TOKEN is not set in environment variables`,
    );
  }
  return { preview, previewToken };
};
