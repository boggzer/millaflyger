import React, { useMemo, useState, memo } from 'react';
import { useTransition, animated } from 'react-spring';
import useMeasure from '../../hooks/useMeasure';
import useMedia from '../../hooks/useMedia';
import '../../css/ResponsiveGrid.scss';

export type ResponsiveGridImageType = {
  id: string;
  src: string;
  height: number;
  width: number;
};

interface ResponsiveGridProps {
  images: ResponsiveGridImageType[];
  mediaQueries?: string[];
  queriesCount?: number[];
  loading?: boolean;
  queriesDefaultCount?: number;
  isMounted?: () => boolean;
}

const ResponsiveGrid = ({
  images,
  loading = false,
  mediaQueries,
  queriesCount,
  queriesDefaultCount,
}: ResponsiveGridProps): React.ReactElement => {
  const [bind, { width }] = useMeasure();
  const [items, _] = useState(images);
  const columns = useMedia({
    queries: mediaQueries || [
      '(max-width: 800px) and (min-width: 651px)',
      '(max-width: 650px) and (min-width: 401px)',
      '(max-width: 400px) and (min-width: 0)',
    ],
    values: queriesCount || [3, 2, 1],
    defaultValue: queriesDefaultCount || 4,
  });
  const [heights, gridItems] = useMemo(() => {
    const heights = new Array(columns).fill(0);
    const gridItems =
      !loading &&
      items &&
      items.map((child) => {
        const column = heights.indexOf(Math.min(...heights));
        const xy = [
          (width / columns - 16) * column,
          (heights[column] +=
            (child.height * (width / columns - 16)) / child.width) -
            (child.height * (width / columns - 16)) / child.width,
        ];
        return {
          ...child,
          xy,
          width: width / columns - 32,
          height: (child.height * (width / columns - 28)) / child.width,
        };
      });
    return [heights, gridItems as any];
  }, [columns, width, images]);

  const responsiveGridTransitions = useTransition(gridItems, ({ src }) => src, {
    from: ({ xy, width, height }) => ({ xy, width, height, opacity: 0 }),
    enter: ({ xy, width, height }) => ({
      xy,
      width,
      height,
      opacity: 1,
    }),
    update: ({ xy, width, height }) => ({ xy, width, height }),
    leave: { height: 0, opacity: 0 },
    config: { mass: 1, tension: 500, friction: 60 },
    trail: 25,
  });

  return (
    <div
      {...bind}
      className='responsive-grid'
      style={{ height: Math.max(...heights) }}
    >
      {!loading &&
        responsiveGridTransitions.map(
          ({ item, props: { xy, id, ...rest }, key }: any) => (
            <animated.div
              key={`${key}-${id}`}
              style={{
                display:
                  rest?.width === 0 || rest?.height === 0 ? 'none' : 'initial',
                transform: xy.interpolate(
                  (x: number, y: number) => `translate3d(${x}px,${y}px,0)`,
                ),
                ...rest,
              }}
            >
              <div style={{ backgroundImage: `url(${item.src})` }} />
            </animated.div>
          ),
        )}
    </div>
  );
};

export default memo(ResponsiveGrid);
