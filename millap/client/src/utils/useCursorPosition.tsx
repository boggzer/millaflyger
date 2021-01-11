import { useLayoutEffect, useState } from 'react';

const useCursorPosition = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const updatePos = ({ clientX: x, clientY: y }: MouseEvent) =>
    setPos({ x, y });
  useLayoutEffect(() => {
    window.addEventListener('mousemove', updatePos);
    return () => window.removeEventListener('mousemove', updatePos);
  }, []);
  return pos;
};

export default useCursorPosition;
