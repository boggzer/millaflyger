import { useState, useLayoutEffect } from 'react';
import { SizeType } from './constants';

const useWindowSize = (): SizeType => {
  const [size, setSize] = useState({ x: 0, y: 0 });
  useLayoutEffect(() => {
    const updateSize = () =>
      setSize({ x: window.innerWidth, y: window.innerHeight });
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
};

export default useWindowSize;
