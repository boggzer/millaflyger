import React from 'react';
import { CSSProperties } from 'styled-components';
import { ProjectImageLink, Grid } from '@components';
import { PageProps } from '../types';
import { useImageGrid } from '@hooks';
import { GetStaticPropsResult } from 'next';
import { fetchProjects, getPreview } from '@utils';

type QueryData = {
  slug: string;
  title: string;
  image: {
    aspectRatio: number;
    palette: {
      lightMuted: {
        background: string;
      };
    };
    url: string;
    lqip: string;
  };
};

export default function Overview({ data }: PageProps<QueryData[]>) {
  const images = useImageGrid<QueryData>({
    data,
  });

  return Array.isArray(data) ? (
    <Grid gap={{ mobile: '.75rem', desktop: '2rem' }}>
      {images.map(({ slug, title, image, ...rest }) => {
        return (
          <ProjectImageLink
            key={slug}
            source={image?.url}
            style={
              {
                '--grid-row-end': `span ${rest.mobile.gridRowEnd}`,
              } as CSSProperties
            }
            title={title}
            href={`/projects/${slug}`}
          />
        );
      })}
    </Grid>
  ) : (
    <div>No documents found</div>
  );
}

export async function getStaticProps(
  context,
): Promise<
  GetStaticPropsResult<
    PageProps<QueryData[]> & { preview?: boolean; previewToken?: string }
  >
> {
  try {
    const { preview, previewToken } = getPreview(context);

    const data = await fetchProjects(previewToken);

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
        status: 500,
      },
    };
  }
}
