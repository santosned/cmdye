import { CmDye } from './types';
import { apply } from './utils/apply';
import { join } from './helpers/join';

/**
 * Colorify console message.
 * ```js
 * const warn = (msg) => {
 *   return cmdye('%cWARN%c', msg).apply('bold,yellow', '!bold');
 * }
 *
 * console.log(warn('this is a warning message'));
 * ```
 */
export const cmdye: CmDye = (...messages) => {
  const msg = join(messages);

  return {
    apply: (...codes) => apply(codes, msg),
  };
};
