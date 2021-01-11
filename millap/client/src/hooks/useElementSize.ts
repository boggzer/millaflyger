import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { SizeType } from '../utils/constants';

const useElementSize = (
  el: HTMLDivElement | undefined,
  delay = 500,
): SizeType => {
  const [trueSize, setTrueSize] = useState({ x: 0, y: 0 });
  const [size] = useDebounce(trueSize, delay);

  useEffect(() => {
    const updateSize = () =>
      el && setTrueSize({ x: el.offsetWidth as number, y: el.offsetHeight });
    window.addEventListener('resize', updateSize);
    window.addEventListener('load', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [el]);

  return size;
};

export default useElementSize;
