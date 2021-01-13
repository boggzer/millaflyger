/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';

const useRefChange = (
  setRef: React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
): ((node: any) => void) => {
  const onRefChange = useCallback((node) => {
    setRef(node);
  }, []);
  return onRefChange;
};

export default useRefChange;
