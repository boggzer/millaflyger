import React, { CSSProperties, HTMLAttributes } from 'react';
import { ratio } from '../../utils/constants';

interface TextProps extends HTMLAttributes<HTMLParagraphElement> {
  containerClasses?: string;
  textClasses?: string;
  type?: 'link';
  children?: React.ReactNode;
}

const Text = ({
  containerClasses,
  textClasses,
  type,
  children,
}: TextProps): React.ReactElement => {
  const containerStyle: CSSProperties = { margin: ratio.TWO };
  const textStyle: CSSProperties = { margin: ratio.ONE };

  return (
    <>
      {type === 'link' ? (
        <a>{children}</a>
      ) : (
        <div className={containerClasses} style={{ ...containerStyle }}>
          <p className={textClasses} style={{ ...textStyle }}>
            {children}
          </p>
        </div>
      )}
    </>
  );
};

export default Text;
