import React from 'react';
import { usePreview } from '../lib/sanity.preview';
import { getProjectBySlug } from '../lib/queries';
import Project from './Project';

interface Props {
  params: Record<string, unknown>;
  url?: Record<string, unknown>; // TODO maybe not needed
}

export default function PreviewProject({ params }: Props) {
  const data = usePreview(
    process.env.SANITY_PREVIEW_TOKEN ?? null,
    getProjectBySlug,
    params,
  );

  return <Project data={data} />;
}
