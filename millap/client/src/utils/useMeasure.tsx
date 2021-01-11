import { useRef, useState, useEffect, MutableRefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

const useMeasure = (): [
  { ref: MutableRefObject<any> },
  Record<string, number>,
] => {
  const ref = useRef();
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 });
  const [ro] = useState(
    () => new ResizeObserver(([entry]) => set(entry.contentRect)),
  );
  useEffect(
    () =>
      ref.current &&
      (ro.observe((ref.current as unknown) as Element), ro.disconnect),
    [],
  );
  return [{ ref }, bounds];
};

export default useMeasure;
