import React, { useLayoutEffect, useState } from 'react';

const useCursorPosition = (delay?: number) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const updatePos = ({ clientX: x, clientY: y }: MouseEvent) =>
    setPos({ x, y });
  console.log(pos);
  useLayoutEffect(() => {
    window.addEventListener('mousemove', updatePos);
    return () => window.removeEventListener('mousemove', updatePos);
  }, []);
  return pos;
};

export default useCursorPosition;
