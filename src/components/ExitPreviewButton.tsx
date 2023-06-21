import React from 'react';
import Link from 'next/link';
import styles from '@styles/exitPreviewButton.module.scss';
import Button from './Button';

export default function ExitPreviewButton() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href='/api/exit-preview'>
        <Button>Exit preview</Button>
      </Link>
    </div>
  );
}
