import { getProjectBySlug, getProjectSlugs } from '../../lib/queries';

import React, { CSSProperties } from 'react';
import { client } from '../../lib/sanity.client';
import { useRouter } from 'next/router';
import { FlexGridImage, FlexGrid, Text } from '@components';
import { TextType } from '@types';
import styles from '@styles/project.module.scss';

interface Props {
  data?: {
    title: string;
    slug: string;
    rows: { images: { url: string; metadata: any }[] }[];
  };
}

export default function ProjectPage({ data }: Props) {
  const router = useRouter();
  const slug = data?.slug;

  if (!router.isFallback && !slug) {
    return <div>Error</div>;
  }

  return (
    <div>
      <Text type={TextType.H1} className={styles.container}>
        {data.title}
      </Text>
      <FlexGrid gap='0.5rem'>
        {data?.rows?.map(({ images }) =>
          images.map((image) => (
            <FlexGridImage
              flexBasis={`${(100 / images.length).toFixed(2)}%`}
              source={image.url}
              style={
                {
                  '--color-placeholder':
                    image.metadata.palette.lightMuted.background,
                } as CSSProperties
              }
            />
          )),
        )}
      </FlexGrid>
    </div>
  );
}

export async function getStaticProps({
  params,
}: {
  params: { slug?: string };
}) {
  const data = await client.fetch(getProjectBySlug, {
    slug: params.slug,
  });

  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const paths = await client.fetch(getProjectSlugs);

  return {
    paths: paths.map((slug: string) => ({ params: { slug } })),
    fallback: true,
  };
}
