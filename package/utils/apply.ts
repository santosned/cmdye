import { AnyCodes } from '../types';
import { parser } from './parser';

export const apply = (codes: AnyCodes[], to: string): string => {
  if (!to.includes('%c')) {
    return parser(codes[codes.length - 1]) + to + parser('reset');
  }

  const shouldApplyClosure = !to.match(/(%c)$/gm);

  let occurrences = -1;
  let res = to.replace(/(%c)/gm, (match) => {
    occurrences++;
    const code = parser(codes[occurrences], match);
    return code;
  });

  if (shouldApplyClosure) {
    res += parser('reset');
  }

  return res;
};
