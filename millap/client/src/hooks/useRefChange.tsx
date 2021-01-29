import React, { RefObject, useCallback } from 'react';

type RefNode = HTMLElement | HTMLImageElement | HTMLDivElement | undefined;

export type HookReturn =
  | ((_instance: never | null) => void)
  | RefObject<keyof RefNode>
  | null
  | undefined;

type HookProps = {
  (_value: React.SetStateAction<HTMLElement | undefined>): void;
  (_value: React.SetStateAction<HTMLElement | undefined>): void;
  (_arg0: never): void;
};

const useRefChange = (setRef: HookProps): HookReturn => {
  const onRefChange = useCallback((refNode) => {
    setRef(refNode);
  }, []);
  return onRefChange;
};

export default useRefChange;
