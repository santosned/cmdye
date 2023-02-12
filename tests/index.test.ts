import cmdye from '../package/index';

describe('CmDye', () => {
  it('Expose public API', () => {
    const methods = cmdye('');

    expect(methods).toHaveProperty('toString');
    expect(methods).toHaveProperty('color');
    expect(methods).toHaveProperty('bg');
    expect(methods).toHaveProperty('style');
  });

  it('throws when invalid colors, bg or styles are given', () => {
    const methods = cmdye('');

    // @ts-expect-error invalid colors expect error
    expect(() => methods.bg('lime')).toThrow();
    // @ts-expect-error invalid colors expect error
    expect(() => methods.color('lime')).toThrow();
    // @ts-expect-error invalid colors expect error
    expect(() => methods.style('lime')).toThrow();
  });

  it('foreground colors', () => {
    const methods = cmdye('test');

    expect(methods.color('black').toString()).toBe('\x1B[30mtest\x1B[0m');
    expect(methods.color('red').toString()).toBe('\x1B[31mtest\x1B[0m');
    expect(methods.color('green').toString()).toBe('\x1B[32mtest\x1B[0m');
    expect(methods.color('yellow').toString()).toBe('\x1B[33mtest\x1B[0m');
    expect(methods.color('blue').toString()).toBe('\x1B[34mtest\x1B[0m');
    expect(methods.color('magenta').toString()).toBe('\x1B[35mtest\x1B[0m');
    expect(methods.color('cyan').toString()).toBe('\x1B[36mtest\x1B[0m');
    expect(methods.color('white').toString()).toBe('\x1B[37mtest\x1B[0m');
    expect(methods.color('crimson').toString()).toBe('\x1B[38mtest\x1B[0m');
    expect(methods.color('default').toString()).toBe('\x1B[39mtest\x1B[0m');
    expect(methods.color('lightblack').toString()).toBe('\x1B[90mtest\x1B[0m');
    expect(methods.color('lightred').toString()).toBe('\x1B[91mtest\x1B[0m');
    expect(methods.color('lightgreen').toString()).toBe('\x1B[92mtest\x1B[0m');
    expect(methods.color('lightyellow').toString()).toBe('\x1B[93mtest\x1B[0m');
    expect(methods.color('lightblue').toString()).toBe('\x1B[94mtest\x1B[0m');
    expect(methods.color('lightmagenta').toString()).toBe('\x1B[95mtest\x1B[0m');
    expect(methods.color('lightcyan').toString()).toBe('\x1B[96mtest\x1B[0m');
    expect(methods.color('lightwhite').toString()).toBe('\x1B[97mtest\x1B[0m');
  });

  it('background colors', () => {
    const methods = cmdye('test');

    expect(methods.bg('black').toString()).toBe('\x1B[40mtest\x1B[0m');
    expect(methods.bg('red').toString()).toBe('\x1B[41mtest\x1B[0m');
    expect(methods.bg('green').toString()).toBe('\x1B[42mtest\x1B[0m');
    expect(methods.bg('yellow').toString()).toBe('\x1B[43mtest\x1B[0m');
    expect(methods.bg('blue').toString()).toBe('\x1B[44mtest\x1B[0m');
    expect(methods.bg('magenta').toString()).toBe('\x1B[45mtest\x1B[0m');
    expect(methods.bg('cyan').toString()).toBe('\x1B[46mtest\x1B[0m');
    expect(methods.bg('white').toString()).toBe('\x1B[47mtest\x1B[0m');
    expect(methods.bg('crimson').toString()).toBe('\x1B[48mtest\x1B[0m');
    expect(methods.bg('default').toString()).toBe('\x1B[49mtest\x1B[0m');
    expect(methods.bg('lightblack').toString()).toBe('\x1B[100mtest\x1B[0m');
    expect(methods.bg('lightred').toString()).toBe('\x1B[101mtest\x1B[0m');
    expect(methods.bg('lightgreen').toString()).toBe('\x1B[102mtest\x1B[0m');
    expect(methods.bg('lightyellow').toString()).toBe('\x1B[103mtest\x1B[0m');
    expect(methods.bg('lightblue').toString()).toBe('\x1B[104mtest\x1B[0m');
    expect(methods.bg('lightmagenta').toString()).toBe('\x1B[105mtest\x1B[0m');
    expect(methods.bg('lightcyan').toString()).toBe('\x1B[106mtest\x1B[0m');
    expect(methods.bg('lightwhite').toString()).toBe('\x1B[107mtest\x1B[0m');
  });

  it('transform styles', () => {
    const methods = cmdye('test');

    expect(methods.style('bold').toString()).toBe('\x1B[1mtest\x1B[0m');
    expect(methods.style('light').toString()).toBe('\x1B[1mtest\x1B[0m');
    expect(methods.style('bright').toString()).toBe('\x1B[1mtest\x1B[0m');
    expect(methods.style('dim').toString()).toBe('\x1B[2mtest\x1B[0m');
    expect(methods.style('faint').toString()).toBe('\x1B[2mtest\x1B[0m');
    expect(methods.style('italic').toString()).toBe('\x1B[3mtest\x1B[0m');
    expect(methods.style('cursive').toString()).toBe('\x1B[3mtest\x1B[0m');
    expect(methods.style('underscore').toString()).toBe('\x1B[4mtest\x1B[0m');
    expect(methods.style('underline').toString()).toBe('\x1B[4mtest\x1B[0m');
    expect(methods.style('blink').toString()).toBe('\x1B[5mtest\x1B[0m');
    expect(methods.style('reverse').toString()).toBe('\x1B[7mtest\x1B[0m');
    expect(methods.style('invert').toString()).toBe('\x1B[7mtest\x1B[0m');
    expect(methods.style('hidden').toString()).toBe('\x1B[8mtest\x1B[0m');
    expect(methods.style('conceal').toString()).toBe('\x1B[8mtest\x1B[0m');
    expect(methods.style('strike-through').toString()).toBe('\x1B[9mtest\x1B[0m');
    expect(methods.style('crossed-out').toString()).toBe('\x1B[9mtest\x1B[0m');
    expect(methods.style('overline').toString()).toBe('\x1B[53mtest\x1B[0m');
  });

  it('string substitution patterns', () => {
    expect(cmdye('%fConsole%c %fmessages%c %fdye%c').color('lightmagenta', 'lightyellow', 'lightcyan').toString()).toBe(
      '\x1B[95mConsole\x1B[0m \x1B[93mmessages\x1B[0m \x1B[96mdye\x1B[0m'
    );

    expect(cmdye('%ftest%c', '%fall%c').bg(null, 'red').color('green').toString()).toBe(
      '\x1B[32mtest\x1B[0m \x1B[41mall\x1B[0m'
    );

    expect(cmdye('%ftest%c', '%fall%c').style('italic').color('green', 'blue').toString()).toBe(
      '\x1B[32;3mtest\x1B[0m \x1B[34mall\x1B[0m'
    );

    expect(
      cmdye(
        '%fLorem ipsum dolor sit amet%c, consectetur adipiscing elit.\nQuisque scelerisque posuere erat, auctor consectetur risus iaculis a. Suspendisse blandit felis ut mauris aliquam, pretium scelerisque justo pellentesque. Donec dictum tincidunt ultricies. Curabitur sit amet aliquam mi. Aenean hendrerit enim elit, eget dapibus justo egestas molestie. Quisque auctor egestas tortor sed rhoncus. Praesent mattis lorem at consectetur elementum. Vivamus ultrices, justo nec maximus ullamcorper, velit erat tristique arcu, bibendum vehicula mauris justo a turpis. Duis id risus aliquet, pretium mi non, tristique diam. Nunc quis quam feugiat, fermentum nulla eget, bibendum mauris. Quisque interdum massa neque, ac eleifend nisi vehicula eu. Aenean viverra purus diam, a dignissim sem hendrerit vitae. Vestibulum sit amet est mollis, vulputate lorem a, maximus nunc. Praesent vel finibus nisl.\n %fNulla at odio mauris%c.'
      )
        .style('italic')
        .color('green', 'blue')
        .toString()
    ).toBe(
      '\x1B[32;3mLorem ipsum dolor sit amet\x1B[0m, consectetur adipiscing elit.\nQuisque scelerisque posuere erat, auctor consectetur risus iaculis a. Suspendisse blandit felis ut mauris aliquam, pretium scelerisque justo pellentesque. Donec dictum tincidunt ultricies. Curabitur sit amet aliquam mi. Aenean hendrerit enim elit, eget dapibus justo egestas molestie. Quisque auctor egestas tortor sed rhoncus. Praesent mattis lorem at consectetur elementum. Vivamus ultrices, justo nec maximus ullamcorper, velit erat tristique arcu, bibendum vehicula mauris justo a turpis. Duis id risus aliquet, pretium mi non, tristique diam. Nunc quis quam feugiat, fermentum nulla eget, bibendum mauris. Quisque interdum massa neque, ac eleifend nisi vehicula eu. Aenean viverra purus diam, a dignissim sem hendrerit vitae. Vestibulum sit amet est mollis, vulputate lorem a, maximus nunc. Praesent vel finibus nisl.\n \x1B[34mNulla at odio mauris\x1B[0m.'
    );
  });

  it('edge cases & multiple combinations', () => {
    expect(cmdye('a', 'b', 'c').style('italic', 'bold').color('blue').toString()).toBe('\x1B[34;3;1ma b c\x1B[0m');
    expect(cmdye('test').style('italic', 'bold').bg('blue').color('white').toString()).toBe(
      '\x1B[44;37;3;1mtest\x1B[0m'
    );
    expect(cmdye('%fConsole%c messages %fdye%c').style('italic', 'bold').style('italic', 'bold').toString()).toBe(
      '\x1B[3;1mConsole\x1B[0m messages \x1B[3;1mdye\x1B[0m'
    );
    expect(cmdye('test').style(null, 'bold').color('blue').toString()).toBe('\x1B[34;1mtest\x1B[0m');
    expect(cmdye('test').style(null).toString()).toBe('test');
    expect(cmdye('test').color(null).toString()).toBe('test');
    expect(cmdye('test').color().toString()).toBe('test');
    expect(cmdye('test').bg(null).toString()).toBe('test');
    expect(cmdye('test').bg().toString()).toBe('test');
    expect(cmdye('test').toString()).toBe('test');
    expect(cmdye('test', '').toString()).toBe('test');
  });
});
