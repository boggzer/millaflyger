import styled, { css } from 'styled-components';

import { Image } from '..';
import { ImageRowType } from '../../types';
import PageLink from './PageLink';
import React from 'react';

const StyledLink = styled(PageLink)<{
  styles?: Record<any, any>;
}>`
  ${({ theme, styles }) =>
    styles &&
    css`
      grid-row: ${styles.mobile.gridRowStart} / ${styles.mobile.gridRowEnd};
      grid-column: ${styles.mobile.gridColumn};

      @media screen and ${theme.utils.mq.min.laptop} {
        grid-row: ${styles.desktop.gridRowStart} / ${styles.desktop.gridRowEnd};
        grid-column: ${styles.desktop.gridColumn};
      }
    `}
`;

interface ImageCardProps
  extends React.HTMLProps<HTMLAnchorElement>,
    Pick<NonNullable<ImageRowType>[number], 'alt' | 'file'> {
  href: string;
  styles?: Record<any, any>
}

const ImageCard: React.FunctionComponent<ImageCardProps> = ({
  href,
  src,
  file,
  alt,
  styles,
  className
}) => (
    <StyledLink
      to={href}
      styles={styles}
      className={className}
    >
      <Image file={file} src={src} alt={alt} />
    </StyledLink>
  );

export default ImageCard;
