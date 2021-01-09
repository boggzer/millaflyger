import { useState, useLayoutEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { SizeType } from './constants';

const useElementSize = (
  el: HTMLDivElement | undefined,
  delay = 2000,
): SizeType => {
  const [trueSize, setTrueSize] = useState({ x: 0, y: 0 });
  const [size] = useDebounce(trueSize, delay);

  useLayoutEffect(() => {
    if (typeof el !== 'undefined') {
      const updateSize = () =>
        setTrueSize({ x: el.offsetWidth, y: el.offsetHeight });
      window.addEventListener('resize', updateSize);
      window.addEventListener('load', updateSize);
      updateSize();
      return () => window.removeEventListener('resize', updateSize);
    }
  }, [el]);

  return size;
};

export default useElementSize;
