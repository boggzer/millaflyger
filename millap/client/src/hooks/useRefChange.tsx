import React, { useState, useCallback } from 'react';

const useRefChange = (
  setRef: React.Dispatch<React.SetStateAction<HTMLDivElement | undefined>>,
): ((node: any) => void) => {
  const onRefChange = useCallback((node) => {
    setRef(node);
  }, []);
  return onRefChange;
};

export default useRefChange;
