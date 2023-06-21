import React, { lazy } from 'react';
import { useRouter } from 'next/router';
import { Project } from '@components';
import { PageProps } from '@types';
import { fetchProject, fetchProjectSlugs } from '@utils';
import { GetStaticPropsResult } from 'next';
import { PreviewSuspense } from 'next-sanity/preview';
const PreviewProject = lazy(() => import('../../components/PreviewProject'));

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
}

export default function ProjectPage({ data, preview }: Props) {
  const router = useRouter();
  const slug = data?.slug;

  if (preview && router.asPath) {
    return (
      <PreviewSuspense fallback={'loading'}>
        <PreviewProject
          params={{ slug: router.query.slug }}
          url={{ path: router.asPath }}
        />
      </PreviewSuspense>
    );
  }

  if (!router.isFallback && !slug) {
    return <div>Error</div>;
  }

  return <Project data={data} />;
}

export async function getStaticProps({
  params,
  preview,
}: {
  params: { slug?: string };
  preview?: boolean;
}): Promise<
  GetStaticPropsResult<PageProps<QueryData[]> & { preview?: boolean }>
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
    const data = await fetchProject(params.slug);

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
        data: err,
        status: 500,
      },
    };
  }
}

export async function getStaticPaths() {
  const paths = await fetchProjectSlugs();

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}
