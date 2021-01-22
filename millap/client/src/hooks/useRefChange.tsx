import React, { useCallback } from 'react';

type RefNode =
  | HTMLElement
  | HTMLImageElement
  | HTMLDivElement
  | undefined
  | null;

type HookReturn = (refNode: RefNode) => void;

type HookProps = React.Dispatch<
  React.SetStateAction<
    HTMLElement | Element | HTMLImageElement | HTMLDivElement | undefined
  >
>;

const useRefChange = (setRef: HookProps): HookReturn => {
  const onRefChange = useCallback((refNode) => {
    setRef(refNode);
  }, []);
  return onRefChange;
};

export default useRefChange;
