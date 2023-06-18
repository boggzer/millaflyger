import React, { ComponentPropsWithoutRef } from 'react';
import { PageProps } from '@types';
import { PortableContent } from '@components';
import { client } from '../lib/sanity.client';
import { getIndexPage } from '../lib/queries';
import { GetStaticPropsResult } from 'next'

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

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps<{ content?: any[] }>>
> {
  try {
    const data = await client.fetch(getIndexPage);

    return {
      props: {
        data,
        status: 200,
      },
      revalidate: 60
    };
  } catch (err) {
    return {
      props: {
        status: 500,
      },
    };
  }
}
