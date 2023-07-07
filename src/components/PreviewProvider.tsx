import React, { type PropsWithChildren, useMemo } from 'react';
import { LiveQueryProvider } from '@sanity/preview-kit';
import { getClient } from '../lib/getClient';

interface Props extends PropsWithChildren {
  previewToken: string;
}

export default function PreviewProvider({ children, previewToken }: Props) {
  const client = useMemo(() => getClient(previewToken), [previewToken]);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
