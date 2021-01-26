import React, { useEffect } from 'react';
import usePortal from 'react-cool-portal';
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

  const svgContent = (
    <>
      <svg
        className='svg-title-text'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 500 110'
      >
        <g height='100%'>
          <line x1='50%' y1='100%' y2='100%' x2='0' stroke='black' />
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
      {svgContent}
    </WithPortal>
  ) : (
    svgContent
  );
};

export default WrappedSvgText;
