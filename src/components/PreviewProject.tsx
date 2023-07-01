import React from 'react';
import { useLiveQuery } from 'next-sanity/preview';
import { getProjectBySlug } from '../lib/queries';
import Project from './Project';

interface Props {
  params: Record<string, unknown>;
  data?: Record<string, any>;
}

export default function PreviewProject({ data: initialData = [], params }: Props) {
  const [data] = useLiveQuery(initialData, getProjectBySlug, params);

  return <Project data={data} />;
}
