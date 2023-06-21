import React from 'react';
import { CSSProperties } from 'styled-components';
import Grid from '../components/Grid';
import { ProjectImageLink } from '@components';
import { PageProps } from '../types';
import { useImageGrid } from 'hooks';
import { GetStaticPropsResult } from 'next';
import { fetchProjects } from '@utils';

type QueryData = {
  slug: string;
  title: string;
  image: {
    aspectRatio: number;
    palette: {
      lightMuted: {
        background: string;
      }
    }
    url: string;
    lqip: string;
  };
};

const calculateGridStyles = (data, columns: { id: string | number; value: number; }[]) => {
  return (data ?? []).reduce((acc, curr, index) =>
    [...acc, columns.reduce((styles, col) => {
      const column = (index % col.value) + 1;
      const gridRowStart = index < col.value ? 1 : (acc?.[index - col.value][col.id].gridRowEnd || 1);
      const gridRowEnd = ~~((1 - curr.image.aspectRatio) * 100) + gridRowStart;

      return {
        ...styles, [col.id]: {
          gridColumnStart: column,
          gridColumnEnd: column,
          gridRowStart,
          gridRowEnd,
        },
        ...curr
      }
    }, {})]
    , []);
}

export default function Overview({ data, status }: PageProps<QueryData[]>) {
  /*   const images = useImageGrid({
      columns: [
        { id: 'mobile', value: 2 },
        { id: 'desktop', value: 3 },
      ],
      data,
    }); */

  const imgs = useImageGrid<QueryData>({
    data
  })

  return Array.isArray(data) ? (
    <Grid>
      {imgs.map(({ slug, title, image, ...rest }) => {
        return (
          <ProjectImageLink
            key={slug}
            source={image.url}
            style={{ '--grid-row-end': `span ${rest.mobile.gridRowEnd}` } as CSSProperties}
            title={title}
            href={`/projects/${slug}`}
          />
        )
      })}
    </Grid>
  ) : (
    <div>No documents found</div>
  );
}

export async function getStaticProps(): Promise<
  GetStaticPropsResult<PageProps<QueryData[]>>
> {
  try {
    const data = await fetchProjects();

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
