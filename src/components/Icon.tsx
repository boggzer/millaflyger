import React, { SVGProps } from 'react';

export enum IconType {
  MENU,
  CLOSE,
  CLOSE_CROSS,
}

interface Props extends Omit<SVGProps<SVGSVGElement>, 'type'> {
  type: IconType;
}

const icons: Record<
  IconType,
  (props: Omit<SVGProps<SVGSVGElement>, 'type'>) => JSX.Element
> = {
  [IconType.CLOSE]: (props) => (
    <svg
      clipRule='evenodd'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m21 3.998c0-.478-.379-1-1-1h-16c-.62 0-1 .519-1 1v16c0 .621.52 1 1 1h16c.478 0 1-.379 1-1zm-16.5.5h15v15h-15zm7.491 6.432 2.717-2.718c.146-.146.338-.219.53-.219.404 0 .751.325.751.75 0 .193-.073.384-.22.531l-2.717 2.717 2.728 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.385-.073-.531-.219l-2.728-2.728-2.728 2.728c-.147.146-.339.219-.531.219-.401 0-.75-.323-.75-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .384.073.53.219z'
        fillRule='nonzero'
      />
    </svg>
  ),
  [IconType.CLOSE_CROSS]: (props) => (
    <svg xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='m2.3 1.6 1 .6 1.6 1 1.6 1L8 5.4l1.8 1.5 1.9 1.6 1.7 1.4 1.5 1.4 1.5 1.3 1.3 1.3 1.7 1.4 2.6 1.9q1.6 1 1.7 1.3v.5l-.1.4-.3.4-.3.3-.5.2h-.5l-.4-.1-.4-.3-.3-.4-.1-.5v-.4q0-.3.2-.5 0-.2.3-.4l.4-.2.4-.1h.5l.4.2.4.3.2.4.1.5v.5l-.3.4-.3.3-.4.3h-1l-.4-.3-.3-.4-.1-.2-1-.5q-1.1-.5-2.2-1.5L16 15.8l-1.3-1.3-1.4-1.3-1.4-1.3-1.8-1.4L8.2 9 6.4 7.6 5 6.5l-1.4-1-1.7-1-1-.6-.3-.2-.2-.3L.2 3v-.6q0-.2.2-.3 0-.2.2-.3l.2-.2.4-.1.3-.1h.3l.3.1h.2z' />
      <path d='m19.6 4.6-.8.7-1.5 1.5-1.6 1.4q-1 .7-1.5 1.5-.6.7-1.1 2-.5 1.5-1 2.2l-1.2 1.6L9.8 17q-.6.7-1 1.7-.5 1.1-1.3 2.2l-1 1.3-.4.3h-1q-.3 0-.5-.2l-.4-.3-.3-.5v-1l.2-.5.4-.3.5-.3h1l.5.3.3.4q.2.2.2.5v1l-.3.5-.4.3-.5.2h-.6l-.5-.2q-.2 0-.4-.3l-.3-.4-.1-.5v-.5l.1-.5.2-.2.6-1L6.3 17l1.2-2.1 1-1.7 1.3-1.7 1-2q.4-1 1.2-2L13.6 6l1.5-1.3L16.6 3l.9-.9.3-.2.4-.1h.7l.4.2.3.2q0 .2.2.3l.1.4.1.4v.3l-.1.4-.2.3-.1.2z' />
    </svg>
  ),
  [IconType.MENU]: (props) => (
    <svg xmlns='http://www.w3.org/2000/svg' {...props}>
      <path d='M3.7 2v1.8L3.4 6l-.5 2.5-.4 1.7-.2 2-.2 2.6v4.9l.1 1.2q0 .5.7.2l1.2-.5 1.5-.3L7 20l1.2-.1h1.8l1.6.4 1 .2q.6.2.7 0l.2-.1.4-.1h.3l.3.1.2.2.2.3V21.9l-.3.2-.3.2h-.6q-.2 0-.3-.2-.2 0-.2-.2l-.2-.3V21l.2-.3.2-.2.3-.1h.7l.3.2.2.3V21.8l-.1.1-1.2.3q-1.1.3-2 0l-2-.1h-2l-1.7.2-1.6.3-1.4.2H1.7q-.6 0-1-.7-.3-.6-.3-1.1l.1-1.2.1-1.5.1-1.4.1-2q0-1.4.2-2.7 0-1.3.2-2.1l.2-1.8.4-2.4.2-2.1V1.9l.1-.2.1-.2.1-.1.2-.2h.8l.1.2.2.1v.4h.1z' />
      <path d='M6.3 7.2h1q1.2 0 2 .2l2.2.2H15l1.6-.1 1.2-.2h.3l.2.2.2.2v.2l.1.2v.3l-.2.2-.2.2h-.7l-.2-.1-.2-.2v-.3q-.1 0 0-.2v-.3l.1-.2.3-.1h.7l.2.2.1.2.1.3v.2l-.1.2-.2.2-.2.1h-.2l-1.2.2-1.7.1h-3.6L9.2 9H6l-.2-.2-.2-.1-.1-.2v-.2l-.1-.2v-.2l.1-.2.1-.2.2-.2H6l.2-.1h.1zM1 11.5h3.8l2.2.1h3.5l1.7.2h1.6l1.5.2 1.3.1h.7q.2 0 .3.2l.2.1.1.3.1.2v.3l-.1.3-.2.2-.3.1H17l-.3-.1-.2-.2-.1-.3v-.5l.2-.2q0-.2.2-.2l.2-.1h.6l.2.2.2.2v.3q.1 0 0 .2v.3l-.2.2-.2.2h-1.1l-1.3-.2-1.4-.2-1.6-.2h-1.6q-.7-.1-1.6 0H.7l-.2-.1-.1-.1-.2-.2V12l.2-.2.1-.1.2-.1H1zM7.6 15.8h2.3l1.8.1 1.6.2H16.2l1.7.1h5.5l.2.2.2.2v.8l-.2.2-.3.2h-.5l-.3-.1-.1-.2-.2-.2v-.6l.2-.2.1-.2.3-.1h.5q.2 0 .3.2l.1.2.1.2v.5q0 .2-.2.3l-.2.1-.2.1h-10q-1 0-1.6-.2H7.5l-.2-.1-.2-.1-.2-.1-.1-.2v-.2l-.1-.2v-.4L7 16l.2-.1.2-.1h.2z' />
    </svg>
  ),
};

export default function Icon({
  type,
  height = 24,
  width = 24,
  viewBox = `0 0 ${height} ${width}`,
  ...rest
}: Props) {
  const IconElement = icons[type];

  return (
    <IconElement height={height} width={width} viewBox={viewBox} {...rest} />
  );
}
