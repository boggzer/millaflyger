import React, {
  forwardRef,
  CSSProperties,
  HTMLAttributes,
  ForwardedRef,
  DetailedHTMLProps,
} from 'react';
import { ratio } from '../../utils/constants';
import '../../css/Text.scss';

interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement | HTMLAnchorElement>,
    HTMLDivElement | HTMLAnchorElement
  > {
  containerClasses?: string;
  textClasses?: string;
  type?: 'link' | 'h6' | 'h4' | 'h2' | 'p';
  children?: React.ReactNode;
  onlyContainer?: boolean;
  ref?: any;
  bold?: boolean;
  innerRef?: any;
  href?: string;
}

const Text = (
  {
    containerClasses,
    textClasses,
    bold = false,
    onlyContainer = false,
    type = 'p',
    children,
    innerRef,
    href,
    ...props
  }: TextProps,
  ref: ForwardedRef<any>,
): React.ReactElement => {
  const containerStyle: CSSProperties = { margin: ratio.TWO };
  const textStyle: CSSProperties = { margin: ratio.ONE };
  return (
    <>
      {type === 'link' ? (
        <a ref={ref} rel='noopener noreferrer' href={href}>
          {children}
        </a>
      ) : (
        <div
          ref={ref}
          className={`text ${type} ${containerClasses} ${bold && 'bold'}`}
          style={{ ...containerStyle }}
          {...props}
        >
          {onlyContainer && children}
          {type === 'h6' && (
            <h6 ref={innerRef} className={textClasses} style={{ ...textStyle }}>
              {children}
            </h6>
          )}
          {type === 'h2' && (
            <h2 ref={innerRef} className={textClasses} style={{ ...textStyle }}>
              {children}
            </h2>
          )}
          {type === 'h4' && (
            <h4 ref={innerRef} className={textClasses} style={{ ...textStyle }}>
              {children}
            </h4>
          )}
          {type === 'p' && onlyContainer === false && (
            <p ref={innerRef} className={textClasses} style={{ ...textStyle }}>
              {children}
            </p>
          )}
        </div>
      )}
    </>
  );
};

export default forwardRef(Text);
