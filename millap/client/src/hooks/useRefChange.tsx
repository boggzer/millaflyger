/* eslint-disable no-unused-vars */
import React, { MutableRefObject, useCallback } from 'react';

const useRefChange = (
  setRef: React.Dispatch<
    React.SetStateAction<
      HTMLElement | Element | HTMLImageElement | HTMLDivElement | undefined
    >
  >,
): ((node: any | MutableRefObject<any>) => void) => {
  const onRefChange = useCallback((node) => {
    setRef(node);
  }, []);
  return onRefChange;
};

export default useRefChange;
