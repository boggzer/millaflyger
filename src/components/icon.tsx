export enum IconType {
  MENU,
  CLOSE,
}

interface Props extends Omit<React.SVGProps<SVGSVGElement>, 'type'> {
  type: IconType;
}

const icons: Record<
  IconType,
  (props: Omit<React.SVGProps<SVGSVGElement>, 'type'>) => JSX.Element
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
  [IconType.MENU]: (props) => (
    <svg
      clipRule='evenodd'
      fillRule='evenodd'
      strokeLinejoin='round'
      strokeMiterlimit='2'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m22 15.25c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-6.5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z'
        fillRule='nonzero'
      />
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

  return <IconElement {...{ height, width, viewBox, ...rest }} />;
}
