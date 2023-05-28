import { AriaAttributes, HTMLProps, PropsWithChildren } from 'react';

import styles from '@styles/button.module.scss';
import { mergeClasses } from '@utils';

interface Props
  extends PropsWithChildren,
    Pick<HTMLProps<HTMLButtonElement>, 'onClick' | 'className'>,
    AriaAttributes {}

export default function Button({ children, className, ...rest }: Props) {
  return (
    <button className={mergeClasses([styles.main, className])} {...rest}>
      {children}
    </button>
  );
}
