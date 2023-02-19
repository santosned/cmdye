import cmdye from '../package/index';
import { msg } from './mock-messages.json';

describe('Ensure the default export is CmDye', () => {
  it('attempts to customize message', () => {
    const methods = cmdye('%c' + msg[0], '%c' + msg[1], '%c' + msg[2]);
    const result = '\x1B[35m\x1B[3m' + msg[0] + ' \x1B[33m' + msg[1] + ' \x1B[36m' + msg[2] + '\x1B[0m';

    expect(methods.apply('magenta,italic', 'yellow', 'cyan')).toBe(result);
  });
});
