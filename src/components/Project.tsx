import React, { type CSSProperties } from 'react';
import { FlexGrid, FlexGridImage, Text } from '@components';
import { TextType } from '@types';
import styles from '@styles/project.module.scss';

export default function Project({ data }) {
  return (
    <div>
      <Text type={TextType.H1} className={styles.container}>
        {data?.title}
      </Text>
      <FlexGrid gap='0.5rem'>
        {data?.rows?.map(({ images }, index) =>
          images.map((image) => (
            <FlexGridImage
              key={`${index}_${data?.slug}`}
              flexBasis={`${(100 / images.length).toFixed(2)}%`}
              src={image.url}
              style={
                {
                  '--color-placeholder':
                    image.metadata.palette.lightMuted.background,
                  '--aspect-ratio':
                    image.metadata.dimensions.aspectRatio.toFixed(2),
                } as CSSProperties
              }
              blurDataURL={image.metadata.lqip}
            />
          )),
        )}
      </FlexGrid>
    </div>
  );
}
