import { NextRouter } from 'next/router';

export const isCurrentPage = (path: string, router: NextRouter) =>
  router.pathname === path;

export const mergeClasses = (classes: (string | null)[]) =>
  classes.join(' ').trim();
