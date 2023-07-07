import React, { type PropsWithChildren } from 'react';
import NextLink, { type LinkProps } from 'next/link';
import styles from '@styles/link.module.scss';

interface Props extends PropsWithChildren, LinkProps {}

export default function Link({ children, href }: Props) {
  return (
    <NextLink href={href} className={styles.container}>
      {children}
    </NextLink>
  );
}
