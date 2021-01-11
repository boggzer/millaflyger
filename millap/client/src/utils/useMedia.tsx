import { useEffect, useState } from 'react';

interface HookProps {
  mediaQueries: string[];
  values?: Record<number, number>;
  defaultValue?: number;
}

const useMedia = ({
  mediaQueries,
  values,
  defaultValue,
}: HookProps): number => {
  const match = () =>
    values?.[mediaQueries.findIndex((q) => matchMedia(q).matches)] ||
    defaultValue;
  const [value, set] = useState(match);
  useEffect(() => {
    const handler = () => set(match);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return value as number;
};

export default useMedia;
