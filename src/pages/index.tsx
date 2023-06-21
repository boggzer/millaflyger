import React, { ComponentPropsWithoutRef } from 'react';
import { PortableContent } from '@components';
import { PageProps } from '@types';
import { fetchIndexPage } from '@utils';
import { GetStaticPropsResult } from 'next';
import { PreviewSuspense } from 'next-sanity/preview';

export default function IndexPage({
  data = { content: [] },
  preview,
}: PageProps<{
  content?: ComponentPropsWithoutRef<typeof PortableContent>['value'];
}> & { preview?: boolean }) {
  return preview ? (
    <PreviewSuspense fallback={<div>loading</div>}>
      {/* TODO preview index page image? */}
    </PreviewSuspense>
  ) : (
    Array.isArray(data?.content) && <PortableContent value={data.content} />
  );
}

export async function getStaticProps({
  preview,
}): Promise<
  GetStaticPropsResult<PageProps<{ content?: any[] }> & { preview?: boolean }>
> {
  if (preview) {
    return {
      props: {
        preview,
        status: 200,
      },
    };
  }

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
}
