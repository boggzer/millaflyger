import React, { forwardRef } from 'react';
import type { GetStaticPropsResult, NextPageContext } from 'next';
import type { CSSProperties } from 'styled-components';
import {
  Grid,
  PageTransition,
  ProjectImageLink,
  type PageTransitionRef,
} from '@components';
import { useImageGrid } from '@hooks';
import { fetchProjects, getPreview } from '@utils';
import type { PageProps } from '@types';

type QueryData = {
  slug: string;
  title: string;
  image: {
    aspectRatio: number;
    url: string;
    lqip: string;
  };
};

const Overview = ({ data }: PageProps<QueryData[]>, ref: PageTransitionRef) => {
  const images = useImageGrid<QueryData>({
    data,
  });
  return Array.isArray(data) ? (
    <PageTransition ref={ref}>
      <Grid gap={{ mobile: '.75rem', desktop: '2rem' }}>
        {images.map(({ slug, title, image, mobile }) => (
          <ProjectImageLink
            key={slug}
            src={image?.url}
            style={
              {
                '--grid-row-end': `span ${mobile.gridRowEnd}`,
                '--aspect-ratio': image.aspectRatio.toFixed(2),
              } as CSSProperties
            }
            title={title}
            href={`/projects/${slug}`}
            blurDataURL={image.lqip}
          />
        ))}
      </Grid>
    </PageTransition>
  ) : (
    <div>No documents found</div>
  );
};

export async function getStaticProps(
  context: NextPageContext,
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

export default forwardRef(Overview);
