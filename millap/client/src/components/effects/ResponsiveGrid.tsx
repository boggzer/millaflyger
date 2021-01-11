import React, { useMemo, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import useMeasure from '../../utils/useMeasure';
import useMedia from '../../utils/useMedia';
import styles from '../../css/ResponsiveGrid.module.css';

export type ResponsiveGridImageType = {
  src: string;
  height: number;
  width: number;
};

interface ResponsiveGridProps {
  images: ResponsiveGridImageType[];
}

const ResponsiveGrid = ({
  images,
}: ResponsiveGridProps): React.ReactElement => {
  const [bind, { width }] = useMeasure();
  const [items, _] = useState(images);
  const columns = useMedia({
    mediaQueries: [
      '(min-width: 1500px)',
      '(min-width: 1200px)',
      '(min-width: 800px)',
      '(min-width: 400px)',
    ],
    values: [5, 4, 3, 2],
    defaultValue: 1,
  });

  const [heights, gridItems] = useMemo(() => {
    const heights = new Array(columns).fill(0);
    const gridItems =
      items &&
      items.map((child, i) => {
        const column = heights.indexOf(Math.min(...heights));
        const xy = [
          (width / columns) * column,
          (heights[column] += child.height) - child.height,
        ];
        return {
          ...child,
          xy,
          width: width / columns,
          height: (child.height * (width / columns)) / child.width,
        };
      });
    return [heights, gridItems];
  }, [columns, items, width]);

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
    config: { mass: 5, tension: 500, friction: 100 },
    trail: 25,
  });
  return (
    <div
      {...bind}
      className={styles.grid}
      style={{ height: Math.max(...heights) }}
    >
      {responsiveGridTransitions.map(
        ({ item, props: { xy, ...rest }, key }: any) => (
          <animated.div
            key={key}
            style={{
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

export default ResponsiveGrid;
