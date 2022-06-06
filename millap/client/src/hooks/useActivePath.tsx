import { useMatch, useResolvedPath } from 'react-router-dom';

import React from 'react';

const useActivePath = (to: string) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return match;
};

export default useActivePath;
