import React from 'react';
import NextLink from 'next/link';
import styles from '@styles/exitPreviewButton.module.scss';
import { Button } from '@components';

export default function ExitPreviewButton() {
  return (
    <div className={styles.container}>
      <NextLink className={styles.link} href='/api/exit-preview'>
        <Button>Exit preview</Button>
      </NextLink>
    </div>
  );
}
