import React, { ComponentPropsWithoutRef, forwardRef } from 'react';
import { GetStaticProps, GetStaticPropsResult } from 'next';
import {
  PageTransition,
  PageTransitionRef,
  PortableContent,
} from '@components';
import { PageProps } from '@types';
import { fetchIndexPage } from '@utils';

function IndexPage(
  {
    data = { content: [] },
  }: PageProps<{
    content?: ComponentPropsWithoutRef<typeof PortableContent>['value'];
  }>,
  ref: PageTransitionRef,
) {
  return (
    Array.isArray(data?.content) && (
      <PageTransition ref={ref}>
        <style jsx global>{`
          :root {
            --overlay-bg: var(--cross-overlay);
          }
        `}</style>
        <PortableContent value={data?.content} />
      </PageTransition>
    )
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

export default forwardRef(IndexPage);
