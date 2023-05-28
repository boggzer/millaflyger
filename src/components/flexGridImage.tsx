import { ComponentProps, CSSProperties } from 'react';
import { Image } from '@components';
import styles from '@styles/flexGridImage.module.scss';

interface Props
  extends ComponentProps<typeof Image>,
    Pick<CSSProperties, 'flexBasis' | 'flexGrow' | 'flexShrink'> {}

export default function FlexGridImage({
  flexBasis,
  flexGrow,
  flexShrink,
  ...rest
}: Props) {
  const style = {
    ...(flexBasis ? { '--flex-basis': flexBasis } : {}),
    ...(flexShrink ? { '--flex-shrink': flexShrink } : {}),
    ...(flexGrow ? { '--flex-grow': flexGrow } : {}),
  } as CSSProperties;

  return (
    <div className={styles.container} style={style}>
      <Image {...rest} />
    </div>
  );
}
