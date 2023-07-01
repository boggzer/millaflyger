import React, { PropsWithChildren, useMemo } from 'react';
import { LiveQueryProvider } from '@sanity/preview-kit';
import { getClient } from '../lib/getClient';

export default function PreviewProvider({
  children,
  previewToken,
}: PropsWithChildren<{
  previewToken: string;
}>) {
  const client = useMemo(() => getClient(previewToken), [previewToken]);
  return <LiveQueryProvider client={client}>{children}</LiveQueryProvider>;
}
