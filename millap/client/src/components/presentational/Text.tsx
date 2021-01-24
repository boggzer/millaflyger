import React, {
  forwardRef,
  CSSProperties,
  HTMLAttributes,
  ForwardedRef,
  DetailedHTMLProps,
} from 'react';
import { ratio } from '../../utils/constants';
import styled from 'styled-components';

const StyledTextContainer = styled.div`
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 3rem;
  }
  h4 {
    font-size: 1.7rem;
  }
  h6 {
    font-size: 1.2rem;
  }
  p {
  }
  &.bold {
    font-weight: bold;
  }
  a {
    border-bottom: 1px solid black;
  }
`;

interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement | HTMLAnchorElement>,
    HTMLDivElement | HTMLAnchorElement
  > {
  ariaId?: string;
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
    ariaId,
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

  const defaultProps = {
    ref: innerRef,
    className: textClasses,
    style: { ...textStyle },
    id: ariaId,
  };

  return (
    <>
      {type === 'link' ? (
        <a
          className={`text link ${textClasses}`}
          id={ariaId}
          ref={ref}
          rel='noopener noreferrer'
          href={href}
        >
          {children}
        </a>
      ) : (
        <StyledTextContainer
          ref={ref}
          className={`text ${type} ${containerClasses} ${bold && 'bold'}`}
          style={{ ...containerStyle }}
          {...props}
        >
          {onlyContainer && children}
          {type === 'h6' && <h6 {...defaultProps}>{children}</h6>}
          {type === 'h2' && <h2 {...defaultProps}>{children}</h2>}
          {type === 'h4' && <h4 {...defaultProps}>{children}</h4>}
          {type === 'p' && onlyContainer === false && (
            <p {...defaultProps}>{children}</p>
          )}
        </StyledTextContainer>
      )}
    </>
  );
};

export default forwardRef(Text);
