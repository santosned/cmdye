export const regexCodes = new Map<string, RegExp>([['patterns', /(%c)|(%f)/gm]]);

export const styleCodes = new Map<string, number>([
  ['bold', 1],
  ['light', 1],
  ['bright', 1],
  ['dim', 2],
  ['faint', 2],
  ['italic', 3],
  ['cursive', 3],
  ['underscore', 4],
  ['underline', 4],
  ['blink', 5],
  ['reverse', 7],
  ['invert', 7],
  ['hidden', 8],
  ['conceal', 8],
  ['strike-through', 9],
  ['crossed-out', 9],
  ['overline', 53],
]);

export const colorCodes = new Map<string, number>([
  ['black', 30],
  ['red', 31],
  ['green', 32],
  ['yellow', 33],
  ['blue', 34],
  ['magenta', 35],
  ['cyan', 36],
  ['white', 37],
  ['crimson', 38],
  ['default', 39],
  ['lightblack', 90],
  ['lightred', 91],
  ['lightgreen', 92],
  ['lightyellow', 93],
  ['lightblue', 94],
  ['lightmagenta', 95],
  ['lightcyan', 96],
  ['lightwhite', 97],
]);

export const bgCodes = new Map<string, number>([
  ['black', 40],
  ['red', 41],
  ['green', 42],
  ['yellow', 43],
  ['blue', 44],
  ['magenta', 45],
  ['cyan', 46],
  ['white', 47],
  ['crimson', 48],
  ['default', 49],
  ['lightblack', 100],
  ['lightred', 101],
  ['lightgreen', 102],
  ['lightyellow', 103],
  ['lightblue', 104],
  ['lightmagenta', 105],
  ['lightcyan', 106],
  ['lightwhite', 107],
]);