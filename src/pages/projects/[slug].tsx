import React, { forwardRef } from 'react';
import type { GetStaticPaths, GetStaticPropsResult } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import {
  Project,
  PreviewProject,
  PageTransition,
  type PageTransitionRef,
} from '@components';
import type { PageProps } from '@types';
import { fetchProject, fetchProjectSlugs, getPreview } from '@utils';

const PreviewProvider = dynamic(
  () => import('../../components/PreviewProvider'),
);

type QueryData = {
  slug: string;
  title: string;
  rows: any[];
};

interface Props {
  data?: {
    title: string;
    slug: string;
    rows: { images: { url: string; metadata: any }[] }[];
  };
  preview?: boolean;
  previewToken?: string;
}

const ProjectPage = (
  { data, preview, previewToken }: Props,
  ref: PageTransitionRef,
) => {
  const router = useRouter();
  const slug = data?.slug;

  if (preview && router.asPath) {
    return (
      <PreviewProvider previewToken={previewToken}>
        <PageTransition ref={ref}>
          <PreviewProject data={data} params={{ slug: router.query.slug }} />
        </PageTransition>
      </PreviewProvider>
    );
  }

  if (!router.isFallback && !slug) {
    return <div>Error</div>;
  }

  return (
    <PageTransition ref={ref}>
      <Project data={data} />
    </PageTransition>
  );
};

export async function getStaticProps({
  params,
  ...context
}: {
  params: { slug?: string };
  preview?: boolean;
}): Promise<
  GetStaticPropsResult<
    PageProps<QueryData[]> & { preview?: boolean; previewToken?: string }
  >
> {
  const { preview, previewToken } = getPreview(context);

  try {
    const data = await fetchProject(params.slug, previewToken);

    return {
      props: {
        data,
        preview,
        previewToken,
        status: 200,
      },
      revalidate: 60,
    };
  } catch (err) {
    return {
      props: {
        data: err,
        status: 500,
      },
    };
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await fetchProjectSlugs();

  return {
    paths,
    fallback: true,
  };
};

export default forwardRef(ProjectPage);
