import React, { ComponentPropsWithoutRef } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import { PortableContent } from '@components';
import { PageProps } from '@types';
import { fetchIndexPage } from '@utils';

export default function IndexPage({
  data = { content: [] },
}: PageProps<{
  content?: ComponentPropsWithoutRef<typeof PortableContent>['value'];
}>) {
  return (
    Array.isArray(data?.content) && <PortableContent value={data.content} />
  );
}

export const getStaticProps: GetStaticProps = async (): Promise<
  GetStaticPropsResult<PageProps<{ content?: any[] }>>
> => {
  try {
    const data = await fetchIndexPage();

    return {
      props: {
        data,
        status: 200,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        status: 500,
      },
    };
  }
};
