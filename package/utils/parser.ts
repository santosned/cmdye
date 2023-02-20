import charCodes from '../constants/charCodes';
import create8BitEscapeCode from './create8BitEscapeCode';

import { AnyCodes } from '../types';

const getEscapeCode = (value: string) => {
  if (!charCodes.has(value)) {
    throw new Error(`The value '${value}' doesn't exist in '${Array.from(charCodes.keys()).join(',')}'`);
  }

  return create8BitEscapeCode(charCodes.get(value)!);
};

const parserStringOptions = (anyCodes: string[]) => {
  let codes = '';

  for (const code of anyCodes) {
    if (!code) continue;

    codes += getEscapeCode(code);
  }

  return codes;
};

export const parser = (anyCodes: AnyCodes, match = ''): string => {
  if (!anyCodes) return match;

  if (!anyCodes.includes(',')) {
    return getEscapeCode(anyCodes);
  }

  return parserStringOptions(anyCodes.split(','));
};
