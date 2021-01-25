import React, { lazy, memo, Suspense, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
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

const StyledLinkHover = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.25);
  opacity: 1;
  transition: opacity 202ms ease-out;
  border-radius: inherit;
`;

const StyledGridImage = styled.div<{ readonly style?: Record<string, any> }>`
  z-index: 6;
  position: absolute;
  overflow: hidden;
  transition: 300ms cubic-bezier(0.67, 0.91, 0.64, 0.68) 70ms;
  transition-property: top, left, width, height;
  border-radius: 0.3rem;
  .text {
    position: absolute;
    height: 100%;
    width: 100%;
    margin: unset !important;
  }
  a {
    overflow: hidden;
    height: inherit;
    width: inherit;
    display: inline-flex;
    position: relative;
    z-index: 5;
    justify-content: center;
    align-items: center;
    transition: opacity 202ms ease-out;
    span {
      color: rgb(255, 255, 255);
      padding-bottom: 25%;
    }
    & + .responsive-image-hover {
      z-index: 4;
      position: absolute;
      display: inline-flex;
      transform: translateX(-100%);
    }
    &:hover {
      opacity: 0;
      & + .responsive-image-hover {
        opacity: 0;
      }
    }
  }
`;

const StyledGrid = styled.div.attrs((props) => ({
  role: 'grid',
}))`
  max-width: 1200px;
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

  const ConditionalLink = ({ children, to, ...rest }: any) =>
    withLink ? (
      <Link to={to} {...rest}>
        <span>{children}</span>
      </Link>
    ) : (
      <div {...rest}>{children}</div>
    );

  const GridImage = ({
    photo: { src, width, height, sizes, srcSet, ...image },
    id,
    top,
    index,
    left,
    ...props
  }: RenderImageProps & { id: string | undefined }): any => (
    <StyledGridImage
      style={{
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
        <ImageCard
          aria-labelledby={id}
          role='img'
          className='responsive-image-card'
          imageSource={src}
          ImageProps={{
            width,
            height,
            ...image,
          }}
        >
          {withLink && (
            <>
              <Text onlyContainer>
                <ConditionalLink
                  id={id}
                  to={`/${id}`}
                  title={(image as any)?.['title']}
                >
                  <h6 className='h6'>{(props as any)?.title}</h6>
                </ConditionalLink>
                <StyledLinkHover className='responsive-image-hover' />{' '}
              </Text>
            </>
          )}
        </ImageCard>
      </Suspense>
    </StyledGridImage>
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
        direction={direction}
        index={index}
        photo={{
          src,
          ...rest,
        }}
        {...props}
      />
    ),
    [],
  );

  const getColumnSize: 1 | 2 | 3 = useMemo(() => {
    if (width > 0 && width < 700) {
      return 1;
    }
    if (width > 700 && width < 1100) {
      return 2;
    }
    return 3;
  }, [width]);

  return (
    <StyledGrid className={`responsive-grid ${classes}`}>
      <Gallery
        margin={~~(width / 100)}
        photos={images}
        columns={getColumnSize}
        direction='column'
        renderImage={imageRenderer}
      />
    </StyledGrid>
  );
};

export default memo(ResponsiveGrid);
