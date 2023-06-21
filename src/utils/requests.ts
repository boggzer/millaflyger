import {
  getIndexPage,
  getProjectBySlug,
  getProjectSlugs,
  getProjects,
} from '../lib/queries';
import { client } from '../lib/sanity.client';

export const fetchIndexPage = async () => await client.fetch(getIndexPage);

export const fetchProjectSlugs = async () =>
  await client.fetch(getProjectSlugs);

export const fetchProject = async (slug: string) =>
  await client.fetch(getProjectBySlug, {
    slug,
  });

export const fetchProjects = async () => await client.fetch(getProjects);
