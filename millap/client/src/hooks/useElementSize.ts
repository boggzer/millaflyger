import { useState, useLayoutEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { SizeType } from '../utils/constants';

const useElementSize = (el: HTMLElement | undefined, delay = 500): SizeType => {
  const [trueSize, setTrueSize] = useState({ x: 0, y: 0 });
  const [size] = useDebounce(trueSize, delay);

  useLayoutEffect(() => {
    const updateSize = () =>
      el && setTrueSize({ x: el.clientWidth, y: el.clientHeight });
    window.addEventListener('resize', updateSize);
    window.addEventListener('load', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [el]);

  return size;
};

export default useElementSize;
