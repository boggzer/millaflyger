import React, { useEffect } from 'react';
import usePortal from 'react-cool-portal';
import styled from 'styled-components';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import textWrap from 'svg-text-wrap';

type withPortalProps = {
  withPortal: true;
  portalId: string;
  showText?: boolean;
  children?: React.ReactNode;
};

type ConditionalType =
  | withPortalProps
  | { withPortal?: false; portalId?: undefined; showText?: undefined };

type WrappedSvgTextProps = {
  children?: string;
} & ConditionalType;

const StyledHiddenH1 = styled.h1`
  border: 0;
  padding: 0;
  margin: 0;
  position: absolute !important;
  height: 1px;
  width: 1px;
  overflow: hidden;
  clip: rect(
    1px 1px 1px 1px
  ); /* IE6, IE7 - a 0 height clip, off to the bottom right of the visible 1px box */
  clip: rect(
    1px,
    1px,
    1px,
    1px
  ); /*maybe deprecated but we need to support legacy browsers */
  clip-path: inset(
    50%
  ); /*modern browsers, clip-path works inwards from each corner*/
  white-space: nowrap; /* added line to stop words getting smushed together (as they go onto seperate lines and some screen readers do not understand line feeds as a space */
`;

const WithPortal = ({
  portalId = 'title-text',
  showText,
  children,
}: withPortalProps) => {
  const { Portal, show, hide } = usePortal({
    containerId: portalId,
    internalShowHide: false,
  });
  useEffect(() => {
    showText ? show() : hide();
    return hide;
  }, []);
  return <Portal>{children}</Portal>;
};

const WrappedSvgText = ({
  withPortal,
  portalId = 'title-text',
  children,
  showText,
}: WrappedSvgTextProps): React.ReactElement => {
  const text: string[] = textWrap(children as string, 100, {
    'letter-spacing': '1px',
  });

  const svgAttrs = {
    'aria-hidden': true,
    focusable: false,
  };

  const svgContent = (
    <>
      <svg
        className='svg-title-text'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 500 110'
        {...svgAttrs}
      >
        <g height='100%'>
          <line x1='100%' y1='100%' y2='100%' x2='0' stroke='black' />
        </g>
      </svg>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 500 130'
        className='svg-title-text'
      >
        <g>
          <text fontSize='1.4rem' x='200' y='60' alignmentBaseline='baseline'>
            {
              (text.map((line: string, i: number, arr: string[]) => (
                <tspan
                  y={`${5}rem`}
                  alignmentBaseline='central'
                  textAnchor='left'
                  x={`${i * 0.05}rem`}
                  dy={`${arr.length === 1 ? 4.5 : 1.5 * (i + 2)}rem`}
                  key={i}
                  height='1rem'
                >
                  {line}
                </tspan>
              )) as unknown) as SVGTSpanElement
            }
          </text>
        </g>
      </svg>
    </>
  );

  return withPortal ? (
    <WithPortal withPortal={withPortal} portalId={portalId} showText={showText}>
      <StyledHiddenH1>{children}</StyledHiddenH1>
      {svgContent}
    </WithPortal>
  ) : (
    svgContent
  );
};

export default WrappedSvgText;
