import { CSSProperties } from 'styled-components';
import Grid from '../components/grid';
import { ProjectImageLink } from '@components';
import { PageProps } from '../types';
import { client } from '../lib/sanity.client';
import { getProjects } from '../lib/queries';
import { useImageGrid } from 'src/hooks';

type QueryData = {
  slug: string;
  title: string;
  image: {
    url: string;
    lqip: string;
  };
};

export default function Overview({ data, status }: PageProps<QueryData[]>) {
  const images = useImageGrid({
    columns: [
      { id: 'mobile', value: 2 },
      { id: 'desktop', value: 3 },
    ],
    data,
  });

  const getStyles = (cell): CSSProperties =>
    ({
      '--aspect-ratio': cell.aspectRatio.toFixed(2),
      '--grid-area': [
        cell.mobile.gridRowStart,
        cell.mobile.gridColumnStart,
        cell.mobile.gridRowEnd,
        cell.mobile.gridColumnEnd,
      ].join(' / '),
      '--grid-area-tablet-and-up': [
        cell.desktop.gridRowStart,
        cell.desktop.gridColumnStart,
        cell.desktop.gridRowEnd,
        cell.desktop.gridColumnEnd,
      ].join(' / '),
      '--color-placeholder': cell?.palette?.lightMuted?.background,
    } as CSSProperties);

  return Array.isArray(data) ? (
    <Grid>
      {images.map(({ slug, title, image, desktop, mobile }) => (
        <ProjectImageLink
          source={image.url}
          style={getStyles({ ...image, desktop, mobile })}
          title={title}
          href={`/projects/${slug}`}
        />
      ))}
    </Grid>
  ) : (
    <div>No documents found</div>
  );
}

export async function getStaticProps(): Promise<{
  props: PageProps<QueryData[]>;
}> {
  try {
    const data = await client.fetch(getProjects);

    return {
      props: {
        data,
        status: 200,
      },
    };
  } catch (err) {
    return {
      props: {
        status: 500,
      },
    };
  }
}
