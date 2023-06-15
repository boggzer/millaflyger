import React, { ComponentPropsWithoutRef } from 'react';
import { PageProps } from '@types';
import { PortableContent } from '@components';
import { client } from '../lib/sanity.client';
import { getIndexPage } from '../lib/queries';

export default function IndexPage({
  data = { content: [] },
}: PageProps<{
  content?: ComponentPropsWithoutRef<typeof PortableContent>['value'];
}>) {
  return (
    <>
      {Array.isArray(data?.content) && <PortableContent value={data.content} />}
    </>
  );
}

export async function getStaticProps(): Promise<{
  props: PageProps<{ content?: any[] }>;
  revalidate?: number;
}> {
  try {
    const data = await client.fetch(getIndexPage);

    return {
      props: {
        data,
        status: 200,
      },
      revalidate: 0
    };
  } catch (err) {
    return {
      props: {
        status: 500,
      },
    };
  }
}
