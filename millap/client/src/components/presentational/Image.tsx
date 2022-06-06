import styled, { css } from 'styled-components';

import { ImageRowType } from '../../types';
import React from 'react';
import { useImageUrlBuilder as url } from '../../hooks';

const StyledImageContainer = styled.div<{
  flex: number | null;
  gridSpan: number;
  isLoading: boolean;
}>`
  ${({ flex }) =>
    typeof flex === 'number' &&
    css`
      flex-basis: ${flex}%;
      flex-grow: 1;
    `};
  height: 100%;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.05);
`;

const StyledImage = styled.img<{ aspectRatio: number; isLoading: boolean }>`
  object-fit: contain;
  max-width: 100%;
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.2);

  transition: opacity 250ms cubic-bezier(0.11, 0, 0.5, 0) 50ms;
  opacity: ${({ isLoading }) => (isLoading ? 0 : 1)};

  ${({ aspectRatio }) =>
    aspectRatio &&
    css`
      @supports (aspect-ratio: 1) {
        object-fit: cover;
        aspect-ratio: ${aspectRatio || 0.7};
      }
    `}
`;
interface ImageProps extends React.HTMLProps<HTMLDivElement>, Pick<NonNullable<ImageRowType>[number], 'alt' | 'file'> {
  classes?: string;
  rowLength?: number;
}

const Image: React.FunctionComponent<ImageProps> = ({ file, alt = '', className = '', classes = '', rowLength, src }): React.ReactElement => {
  const [isLoading, setIsLoading] = React.useState(true);

  const mediaQueries = [{ mq: '(max-width: 360px) 360w', width: 360 }, { mq: '(max-width: 640px) 640w', width: 640 }, { mq: '(max-width: 768px) 768w', width: 768 }, { mq: '(max-width: 1280px) 1280w', width: 1280 }, { mq: '(min-width: 1281px)' }];

  // Join mediaQueries.mq to get value for the "sizes" attribute.
  const sizes = mediaQueries.map(({ mq }) => mq).join(',');
  return file ? (
    <StyledImageContainer isLoading={isLoading} flex={rowLength ? Math.floor(100 / rowLength) : null} className={`${className} ${classes}`} gridSpan={Math.floor((file?.metadata.dimensions.aspectRatio || 1) * 10)}>
      <StyledImage
        srcSet={mediaQueries
          .filter(({ width }) => typeof width === 'number')
          .map(
            ({ width }) =>
              `${url(file.url)
                .width(width as number)
                .auto('format')
                .fit('max')} ${width}w`,
          )
          .join(',')}
        sizes={sizes}
        src={`${url(file.url).auto('format').fit('max')}`}
        alt={alt}
        aspectRatio={Math.floor((file?.metadata.dimensions.aspectRatio || 1) * 100) / 100}
        isLoading={isLoading}
        onLoad={() => setIsLoading(false)}
      />
    </StyledImageContainer>
  ) : src ? (
    <div>
      <img src={src} alt={alt} className={className} />
    </div>
  ) : (
    <></>
  );
};

export default Image;
