import React from 'react';
import slugify from 'slugify';
import Container from './Container';
import ImageGrid from './ImageGrid';
import Text from './Text';
import usePortal from 'react-cool-portal';
import { useWindowSize } from 'react-use';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import textWrap from 'svg-text-wrap';
import { ProjectDataType } from '../../utils/global';
import '../../css/Project.scss';
import { useEffect } from 'react';

export interface ProjectProps {
  content: ProjectDataType;
}

const Project = ({ content }: ProjectProps): React.ReactElement => {
  const { pathname } = document.location;
  const { Portal, show, hide } = usePortal({
    containerId: 'title-text',
    internalShowHide: false,
  });

  useEffect(() => {
    pathname === `/${slugify(content?.title, { lower: true })}`
      ? show()
      : hide();
    return hide;
  }, []);

  const WrappedSvgText = () => {
    // eslint-disable-next-line react/prop-types
    const text: string[] = textWrap(content.title as string, 100, {
      'letter-spacing': '1px',
    });

    return (
      <>
        <svg
          className='svg-title-text'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 110'
        >
          <g height='100%'>
            <line x1='50vh' y1='100%' y2='100%' x2='0' stroke='black' />
          </g>
        </svg>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 110'
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
  };
  return (
    content && (
      <Container classes='container container project'>
        <ImageGrid
          {...content}
          imageCardClasses='image-card'
          outerContainerClasses={`main ${slugify(content?.['title'], {
            lower: true,
          })}`}
        />
        <Portal>
          <WrappedSvgText />
        </Portal>
        {content?.description && <Text>{content.description}</Text>}
      </Container>
    )
  );
};

export default Project;
