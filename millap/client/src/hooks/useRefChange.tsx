import React, { useCallback } from 'react';

type RefNode = HTMLElement | HTMLImageElement | HTMLDivElement | undefined;

type HookReturn = (refNode: RefNode) => void;

type HookProps = React.Dispatch<React.SetStateAction<RefNode>>;

const useRefChange = (setRef: HookProps): HookReturn => {
  const onRefChange = useCallback((refNode) => {
    setRef(refNode);
  }, []);
  return onRefChange;
};

export default useRefChange;
