import React, { type ComponentProps } from 'react';
import NextLink from 'next/link';
import { Image } from '@components';
import { mergeClasses } from '@utils';
import styles from '@styles/projectImageLink.module.scss';

interface Props
  extends ComponentProps<typeof Image>,
    Pick<ComponentProps<typeof NextLink>, 'href'> {}

export default function ProjectImageLink({
  href,
  style,
  title,
  ...rest
}: Props) {
  return (
    <NextLink
      {...{
        href,
        className: mergeClasses([styles.container, rest?.className]),
        style,
      }}
    >
      <Image className={styles.innerContainer} width={500} {...rest}>
        <figcaption className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
        </figcaption>
      </Image>
    </NextLink>
  );
}
