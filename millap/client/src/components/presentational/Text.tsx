import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';
import React from 'react';

type HtmlTagName = 'a' | 'h6' | 'h5' | 'h4' | 'h3' | 'h2' | 'h1' | 'p';

type HtmlElementType<T extends HtmlTagName> = T extends 'a'
  ? HTMLAnchorElement
  : HTMLParagraphElement | HTMLHeadingElement;
interface TextProps<T extends HtmlTagName>
  extends React.HTMLProps<HtmlElementType<T>> {
  textType?: T;
  bold?: boolean;
  lowercase?: boolean;
  font?: 'text' | 'heading';
  withContainer?: boolean;
}

const StyledTextContainer = styled.div<
  Pick<TextProps<HtmlTagName>, 'lowercase' | 'bold' | 'font' | 'textType'>
>`
  ${({ font, textType }) =>
    typeof font === 'string' &&
    typeof textType === 'string' &&
    css`
        font-family: var(--${font}-font-family);
    `}
  ${({ lowercase }) =>
    lowercase &&
    css`
      text-transform: lowercase;
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
  a {
    border-bottom: 1px solid black;
  }
`;

const Text = <T extends HtmlTagName>(
  {
    bold = false,
    lowercase = false,
    textType = 'p' as T,
    children,
    withContainer = false,
    font,
    ...props
  }: React.PropsWithChildren<TextProps<T>>,
  // TODO: Solve ref type compatibe with dynamic component tag name.
  ref: any,
): React.ReactElement => {
  const TagName = textType as HtmlTagName;
  const Component = ({
    children,
    type,
    ...rest
  }: any): React.ReactElement<typeof TagName> => (
    <TagName {...rest}>{children}</TagName>
  );
  return (
    <>
      {textType === 'a' && props.href && props.href.length > 0 ? (
        props.href.indexOf('/') === 0 ? (
          <Component
            className='text link'
            ref={ref}
            rel='noopener noreferrer'
            {...props}
          >
            {children}
          </Component>
        ) : (
          <Link className='text link' rel='noopener noreferrer' to={props.href}>
            {children}
          </Link>
        )
      ) : withContainer ? (
        <StyledTextContainer
          className='text'
          lowercase={lowercase}
          bold={bold}
          font={font}
          textType={textType}
        >
          <Component ref={ref} {...props}>
            {children}
          </Component>
        </StyledTextContainer>
      ) : (
        <StyledTextContainer
          className={`text ${props.className || ''}`}
          lowercase={lowercase}
          bold={bold}
          font={font}
          textType={textType}
          ref={ref}
          as={textType as HtmlTagName}
        >
            {children}
        </StyledTextContainer>
      )}
    </>
  );
};

export default React.forwardRef(Text);
