import React, {
  lazy,
  memo,
  Suspense,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { Link } from 'react-router-dom';
import '../../css/ResponsiveGrid.scss';
import Text from '../presentational/Text';
/*
function fakeDelay(ms: number) {
  return (promise: Promise<any>) =>
    promise.then(
      (data: unknown) =>
        new Promise((resolve) => {
          setTimeout(() => resolve(data), ms);
        }),
    );
}
const ImageCard = lazy(
  (): Promise<any> => {
    const Component = fakeDelay(10000)(import('../presentational/ImageCard'));
    return Component;
  },
);
*/
const ImageCard = lazy(() => import('../presentational/ImageCard'));
import Gallery, { RenderImageProps } from 'react-photo-gallery';
import { useWindowSize } from 'react-use';
import { ProjectDataType } from '../../utils/global';
import slugify from 'slugify';
import styled from 'styled-components';
import Spinner from '../presentational/Spinner';

export type ResponsiveGridImageType = {
  id?: string;
  src: string;
  height: number | any;
  width: number;
  title?: string;
};

const StyledLinkHover = styled.div<{ show: boolean }>`
  position: absolute;
  z-index: 2;
  transition: all 600ms ease;
  opacity: 0;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 100%;
  will-change: opacity;
  display: flex;
  justify-content: center;
  align-items: center;
  .text {
    position: absolute;
    padding-bottom: 25%;
    color: rgb(255, 255, 255);
    opacity: 1;
    z-index: 5;
  }
`;

interface ResponsiveGridProps {
  classes?: string;
  images: ResponsiveGridImageType[];
  withLink?: boolean;
}

const ResponsiveGrid = ({
  images,
  classes,
  withLink,
}: ResponsiveGridProps): any => {
  const { width } = useWindowSize(1, 1);

  const [darkHover, setDarkHover] = useState('');

  const ConditionalLink = ({ children, to, ...rest }: any) =>
    withLink ? (
      <Link to={to} {...rest}>
        {children}
      </Link>
    ) : (
      <div {...rest}>{children}</div>
    );

  const GridImage = ({
    photo: { src, width, height, sizes, srcSet, ...image },
    id,
    top,
    left,
    ...props
  }: RenderImageProps & { id: any }): any => (
    <div
      style={{
        overflow: 'hidden',
        zIndex: 6,
        position: 'absolute',
        top,
        left,
        width,
        height,
        ...image,
      }}
    >
      <Suspense
        fallback={
          <Spinner
            type='image'
            width='inherit'
            height='inherit'
            position='absolute'
            lottieProps={{
              rendererSettings: { viewBoxSize: '60 5 275 160' },
            }}
          />
        }
      >
        <ConditionalLink
          id={id}
          onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>
            setDarkHover(e.currentTarget?.id)
          }
          onMouseLeave={() => setDarkHover('')}
          to={`/${id}`}
          title={(image as any)?.['title']}
        >
          <ImageCard
            imageSource={src}
            ImageProps={{
              width,
              height,
              ...image,
            }}
          >
            {withLink && (
              <StyledLinkHover
                className='responsive-image-hover'
                show={darkHover === id}
              >
                <Text type='h6'>{(props as any)?.title}</Text>
              </StyledLinkHover>
            )}
          </ImageCard>
        </ConditionalLink>
      </Suspense>
    </div>
  );

  const imageRenderer = useCallback(
    ({
      index,
      key,
      photo: { src, title, ...rest },
      direction,
      ...props
    }: any) => (
      <GridImage
        title={title}
        id={slugify(title, { lower: true })}
        key={key}
        margin={'2px'}
        direction={direction}
        index={index}
        photo={{
          src,
          ...rest,
        }}
        {...props}
      />
    ),
    [darkHover],
  );

  const getColumnSize: 1 | 2 = useMemo(() => {
    if (width > 0 && width < 600) {
      return 1;
    }
    return 2;
  }, [width]);

  return (
    <div className={`responsive-grid ${classes}`}>
      <Gallery
        margin={10}
        photos={images}
        columns={getColumnSize}
        direction='column'
        renderImage={imageRenderer}
      />
    </div>
  );
};

export default memo(ResponsiveGrid);
