import { cmdye } from '../package/cmdye';
import { msg } from './mock-messages.json';

describe('CmDye - Initialization', () => {
  it('instantiate & expose public API', () => {
    const methods = cmdye('');

    expect(Object.keys(methods)).toHaveLength(1);
    expect(methods).toHaveProperty('apply');
  });

  it('instantiate with multiple arguments', () => {
    expect(Object.keys(cmdye('a', 'b', 'c', 'd'))).toHaveLength(1);
    expect(Object.keys(cmdye('a', ''))).toHaveLength(1);
  });
});

describe('CmDye - Common Color Operations (CCO)', () => {
  const methods = cmdye(msg[0]);
  const result = (code: number) => '\x1B[' + code + 'm' + msg[0] + '\x1B[0m';

  it('foreground colors', () => {
    expect(methods.apply('black')).toBe(result(30));
    expect(methods.apply('red')).toBe(result(31));
    expect(methods.apply('green')).toBe(result(32));
    expect(methods.apply('yellow')).toBe(result(33));
    expect(methods.apply('blue')).toBe(result(34));
    expect(methods.apply('magenta')).toBe(result(35));
    expect(methods.apply('cyan')).toBe(result(36));
    expect(methods.apply('white')).toBe(result(37));
    expect(methods.apply('!fg')).toBe(result(39));
  });

  it('background colors', () => {
    expect(methods.apply('bg-black')).toBe(result(40));
    expect(methods.apply('bg-red')).toBe(result(41));
    expect(methods.apply('bg-green')).toBe(result(42));
    expect(methods.apply('bg-yellow')).toBe(result(43));
    expect(methods.apply('bg-blue')).toBe(result(44));
    expect(methods.apply('bg-magenta')).toBe(result(45));
    expect(methods.apply('bg-cyan')).toBe(result(46));
    expect(methods.apply('bg-white')).toBe(result(47));
    expect(methods.apply('!bg')).toBe(result(49));
  });

  it('transform styles', () => {
    expect(methods.apply('bold')).toBe(result(1));
    expect(methods.apply('dim')).toBe(result(2));
    expect(methods.apply('italic')).toBe(result(3));
    expect(methods.apply('underline')).toBe(result(4));
    expect(methods.apply('blink')).toBe(result(5));
    expect(methods.apply('reverse')).toBe(result(7));
    expect(methods.apply('hidden')).toBe(result(8));
    expect(methods.apply('strike-through')).toBe(result(9));
    expect(methods.apply('overline')).toBe(result(53));
    expect(methods.apply('!bold')).toBe(result(22));
    expect(methods.apply('!dim')).toBe(result(22));
    expect(methods.apply('!italic')).toBe(result(23));
    expect(methods.apply('!underline')).toBe(result(24));
    expect(methods.apply('!blink')).toBe(result(25));
    expect(methods.apply('!reverse')).toBe(result(27));
    expect(methods.apply('!hidden')).toBe(result(28));
    expect(methods.apply('!strike-through')).toBe(result(29));
    expect(methods.apply('!overline')).toBe(result(55));
  });
});

describe('CmDye - String Substitution Patterns (SSP)', () => {
  it('modularly applies codes in place of patterns', () => {
    expect(cmdye('%c%c').apply('green')).toBe('\x1B[32m%c');
    expect(cmdye('%c%c%c').apply('green', 'black')).toBe('\x1B[32m\x1B[30m%c');
    expect(cmdye('%c', '%c%c', '%c').apply('green,bold', 'black')).toBe('\x1B[32m\x1B[1m \x1B[30m%c %c');
  });

  it('applies closure suffix when needed', () => {
    expect(cmdye('%ctest').apply('green')).toBe('\x1B[32mtest\x1B[0m');
    expect(cmdye('%ctest', '%ctest').apply('green', 'black')).toBe('\x1B[32mtest \x1B[30mtest\x1B[0m');
    expect(cmdye('%ctest', '%ctest%c', '%ctest').apply('green,bold', 'black')).toBe(
      '\x1B[32m\x1B[1mtest \x1B[30mtest%c %ctest\x1B[0m'
    );
  });
});

describe('CmDye - Customize Common Types (CCT)', () => {
  it('booleans', () => {
    expect(cmdye(true).apply('green')).toBe('\x1B[32mtrue\x1B[0m');
    expect(cmdye(false).apply('green')).toBe('\x1B[32mfalse\x1B[0m');
  });

  it('numbers', () => {
    expect(cmdye(222).apply('green')).toBe('\x1B[32m222\x1B[0m');
    expect(cmdye(BigInt('222')).apply('green')).toBe('\x1B[32m222\x1B[0m');
  });

  it('Infinity', () => {
    expect(cmdye(Infinity).apply('green')).toBe('\x1B[32mInfinity\x1B[0m');
  });

  it('objects', () => {
    expect(cmdye({ id: 1 }).apply('green')).toBe('\x1B[32m{\n  "id": 1\n}\x1B[0m');
    expect(cmdye([222, null]).apply('green')).toBe('\x1B[32m[\n  222,\n  null\n]\x1B[0m');
  });

  it('null', () => {
    expect(cmdye(null).apply('green')).toBe('\x1B[32mnull\x1B[0m');
  });

  it('undefined', () => {
    expect(cmdye(undefined).apply('green')).toBe('\x1B[32mundefined\x1B[0m');
  });
});

describe('CmDye - Handle Code Exceptions (HCE)', () => {
  it('skips empty codes', () => {
    expect(cmdye('%c%c').apply('green', null)).toBe('\x1B[32m%c');
    expect(cmdye('%c%c').apply('green', undefined)).toBe('\x1B[32m%c');
    expect(cmdye('%c%c').apply('green', '')).toBe('\x1B[32m%c');
    expect(cmdye('%c%c%c%c').apply('green,,bold', 'italic', 'black')).toBe('\x1B[32m\x1B[1m\x1B[3m\x1B[30m%c');
  });

  it('throws when caught invalid codes', () => {
    // @ts-expect-error unknown foreground names throws error
    expect(() => cmdye('%c%c').apply('orange')).toThrow();
    expect(() => cmdye('%c%c%c').apply('blue,yellow,lime')).toThrow();
    // @ts-expect-error unknown foreground color within mult args throws error
    expect(() => cmdye('%c%c%c').apply('yellow', 'red', 'lime')).toThrow();
  });
});
