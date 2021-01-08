import React, { CSSProperties } from 'react';
import { ratio } from '../../utils/constants';

interface TextProps {
  ContainerStyleProps?: CSSProperties;
  TextStyleProps?: CSSProperties;
  type?: 'link';
  children?: React.ReactNode;
}

const Text = ({
  ContainerStyleProps,
  TextStyleProps,
  type,
  children,
}: TextProps): React.ReactElement => {
  const containerStyle = { margin: ratio.TWO };
  const textStyle = { margin: ratio.ONE };

  return (
    <>
      {type === 'link' ? (
        <a>{children}</a>
      ) : (
        <div style={{ ...containerStyle, ...ContainerStyleProps }}>
          <p style={{ ...textStyle, ...TextStyleProps }}>{children}</p>
        </div>
      )}
    </>
  );
};

export default Text;
