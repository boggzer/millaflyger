import NextLink, { LinkProps } from 'next/link';

import { PropsWithChildren } from 'react';
import styles from '@styles/link.module.scss';

interface Props extends PropsWithChildren, LinkProps {}

export default function Link({ children, href }: Props) {
  return (
    <NextLink href={href} className={styles.container}>
      {children}
    </NextLink>
  );
}
