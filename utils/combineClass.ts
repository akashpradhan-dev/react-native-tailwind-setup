import clsx from 'clsx';

export const combineClass = (...args: Parameters<typeof clsx>): string => {
  return clsx(...args);
};
