# CmDye

![GitHub license](https://img.shields.io/github/license/santosned/cmdye?style=flat&colorA=black&colorB=black)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/santosned/cmdye/node.js.yml?style=flat&colorA=black&colorB=black)
![GitHub issues](https://img.shields.io/github/issues/santosned/cmdye?style=flat&colorA=black&colorB=black)

> A tiny tool to colorify console messages

**CmDye** strives to be a simple but effective solution for making personalized console messages. Whether for your everyday `console.log()` or for seamless integration with more sophisticated logger tools like [Winston](https://www.npmjs.com/package/winston).

⚠️ Currently, **CmDye** is in its **early stages**, which implies that the API could undergo major revisions at any time. Please **do not use this on production** until a stable release is available.

## Features

- CSS-like color names
- String substitution patterns (Supports multi lines)
- _Italic_, **bold** & much more
- Compacted character escape codes
- Ships with type definitions
- Minified bundle
- Works on **CommonJS** or **ES Modules**
- **100%** test coverage

## Getting started

After installing the `cmdye` package you can create a message like this:

![Preview of getting started section](https://raw.githubusercontent.com/santosned/cmdye/main/docs/assets/cmdye-preview.webp)

This message was build using the string substitution patterns:

```js
const cmdye = require('cmdye');

cmdye('%fConsole%c %fmessages%c %fdye%c').color('lightmagenta', 'lightyellow', 'lightcyan').toString();
```

Format (`%f`) or Closure (`%c`) are unique to **CmDye**. Up to this release there's only these two patterns, but in future releases more might be added.

## API

**CmDye** may be the ideal option for creating pre-formatted console messages. The API is being carefully built to allow this while also not badly impacting bundle size or performance.

⚠️ **Note:** Some escape codes are still being tested, which means some escape codes might not work in some terminals or edge cases. If you find one of these bugs please [report it](https://github.com/santosned/cmdye/issues).

### cmdye(...messages: string[])

```js
cmdye('Console messages dye');
```

### .toString()

`toString` method will attempt to create an string containing all the customization defined by the user:

```js
cmdye('Console messages dye').toString();
```

### .color(...name)

`color` method will define the **foreground colors** that should be included in the string:

```js
cmdye('Console messages dye').color('green').toString();
// Returns: '\x1B[32mConsole messages dye\x1B[0m'
```

### .bg(...name)

`bg` method will define the **background colors** that should be included in the string:

```js
cmdye('Console messages dye').bg('blue').toString();
// Returns: '\x1B[44mConsole messages dye\x1B[0m'
```

### .style(...name)

`style` method will define the **text tranform style** that should be included in the string:

```js
cmdye('Console messages dye').style('italic', 'bold').toString();
// Returns: '\x1B[3;1mConsole messages dye\x1B[0m'

cmdye('%fConsole%c messages %fdye%c').style('italic', 'bold').style('italic', 'bold').toString();
// Returns: '\x1B[3;1mConsole\x1B[0m messages \x1B[3;1mdye\x1B[0m'
```

## Contributions

All contributions, from suggesting ideas and reporting bugs to fixing typos are needed. Be welcome to:

- Open [Issue](https://github.com/santosned/cmdye/issues)
- Open [PR](https://github.com/santosned/cmdye/pulls)
