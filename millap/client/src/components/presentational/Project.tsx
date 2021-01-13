import React from 'react';
import Container from './Container';
import ImageGrid from './ImageGrid';
import slugify from 'slugify';
import '../../css/Project.scss';
import Text from './Text';
import { ProjectDataType } from '../../utils/global';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import textWrap from 'svg-text-wrap';
export interface ProjectProps {
  content: ProjectDataType;
}

const Project = ({ content }: ProjectProps): React.ReactElement => {
  const WrappedSvgText = () => {
    // eslint-disable-next-line react/prop-types
    const text: string[] = textWrap(content.title as string, 100, {
      'letter-spacing': '1px',
    });

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 120 120'
        className='svg-title-text'
      >
        <g>
          <text x='20' y='40'>
            {
              (text.map((line: string, i: number) => (
                <tspan
                  x={`${i * 0.05}rem`}
                  dy={`${1 * i}rem`}
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
    );
  };
  return (
    content && (
      <Container classes='container container'>
        <ImageGrid
          {...content}
          imageCardClasses='image-card'
          outerContainerClasses={`main ${slugify(content?.['title'], {
            lower: true,
          })}`}
        />
        <WrappedSvgText />
        {content?.description && <Text>{content.description}</Text>}
      </Container>
    )
  );
};

export default Project;
