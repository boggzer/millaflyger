import React from 'react';
import NextLink from 'next/link';
import styles from '@styles/skipButton.module.scss';

const SkipButton = ({ href }) => {
  return (
    <NextLink tabIndex={0} href={href} className={styles.container}>
      Skip to content
    </NextLink>
  );
};

export default SkipButton;
