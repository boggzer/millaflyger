import React, { ComponentProps } from 'react';
import Link from 'next/link';
import { Image } from '@components';
import { mergeClasses } from '@utils';
import styles from '@styles/projectImageLink.module.scss';

interface Props extends ComponentProps<typeof Image> {}

export default function ProjectImageLink({
  href,
  style,
  title,
  ...rest
}: Props) {
  return (
    <Link
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
    </Link>
  );
}
