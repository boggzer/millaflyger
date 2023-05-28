import './styles.css';

import React, { CSSProperties, PropsWithChildren } from 'react';

interface TextElementProps extends PropsWithChildren {
  value: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
}

export function TextElement({ children, value }: TextElementProps) {
  const Element = value;

  if (Element === 'normal') {
    return <span className='theme normal'>{children}</span>;
  }

  return <Element className='theme heading'>{children}</Element>;
}

export function PreviewImageRow({
  media: images,
  renderDefault,
  ...props
}: any) {
  const styles: Record<string, CSSProperties> = {
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, 100px)',
      gap: '.5rem',
      cursor: 'pointer',
    },
  };
  // DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
  return (
    <div style={styles.container}>
      {(images ?? []).map(({ file }, index: number) => (
        <div key={index}>
          {renderDefault({ ...props, layout: 'media', media: file })}
        </div>
      ))}
    </div>
  );
}

interface IconProps {
  type: string;
  color?: string;
}

export const Icon = ({
  type,
  color = 'var(--card-fg-color, white)',
}: IconProps) => {
  let component;
  switch (type) {
    case 'index': {
      component = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path
            fill={color}
            d='M24 10.935v2.131l-8 3.947v-2.23l5.64-2.783-5.64-2.79v-2.223l8 3.948zm-16 3.848l-5.64-2.783 5.64-2.79v-2.223l-8 3.948v2.131l8 3.947v-2.23zm7.047-10.783h-2.078l-4.011 16h2.073l4.016-16z'
          />
        </svg>
      );

      break;
    }
    case 'project': {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path
            fill={color}
            d='M15.562 20.22l-3.562.718.719-3.562 2.843 2.844zm-2.136-3.552l2.844 2.845 7.73-7.73-2.845-2.845-7.729 7.73zm-2.91.332l4.51-4.76-2.026-3.24-2.52 4-2.48-1.96-4 5.96h6.516zm-3.516-8.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5zm3.352 10.5h-8.352v-14h18v2.312h2v-4.312h-22v18h9.969l.383-2z'
          />
        </svg>
      );
    }
    case 'tag': {
      return (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
        >
          <path
            fill={color}
            d='M9.776 2l11.395 11.395-7.78 7.777-11.391-11.391v-7.781h7.776zm.829-2h-10.605v10.609l13.391 13.391 10.609-10.604-13.395-13.396zm-3.191 7.414c-.781.782-2.046.782-2.829.001-.781-.783-.781-2.048 0-2.829.782-.782 2.048-.781 2.829-.001.782.783.781 2.047 0 2.829z'
          />
        </svg>
      );
    }
    default: {
      component = <></>;
      break;
    }
  }

  return component;
};
