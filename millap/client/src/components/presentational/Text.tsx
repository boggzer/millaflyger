import React, {
  forwardRef,
  CSSProperties,
  HTMLAttributes,
  ForwardedRef,
} from 'react';
import { ratio } from '../../utils/constants';

interface TextProps extends HTMLAttributes<HTMLDivElement> {
  containerClasses?: string;
  textClasses?: string;
  type?: 'link';
  children?: React.ReactNode;
  ref?: any;
}

const Text = (
  { containerClasses, textClasses, type, children, ...props }: TextProps,
  ref: ForwardedRef<any>,
): React.ReactElement => {
  const containerStyle: CSSProperties = { margin: ratio.TWO };
  const textStyle: CSSProperties = { margin: ratio.ONE };

  return (
    <>
      {type === 'link' ? (
        <a>{children}</a>
      ) : (
        <div
          ref={ref}
          className={containerClasses}
          style={{ ...containerStyle }}
          {...props}
        >
          <p className={textClasses} style={{ ...textStyle }}>
            {children}
          </p>
        </div>
      )}
    </>
  );
};

export default forwardRef(Text);
