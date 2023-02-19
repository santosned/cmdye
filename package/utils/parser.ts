import charCodes from '../constants/charCodes';
import create8BitEscapeCode from './create8BitEscapeCode';

import { AnyCodes } from '../types';

export const parser = (anyCodes: AnyCodes, match = ''): string => {
  if (!anyCodes) return match;

  if (!anyCodes.includes(',')) {
    if (!charCodes.has(anyCodes)) {
      throw new Error(`The value '${anyCodes}' doesn't exist in '${Array.from(charCodes.keys()).join(',')}'`);
    }

    return create8BitEscapeCode(charCodes.get(anyCodes)!);
  }

  let escapeCodes = '';
  const values = anyCodes.split(',');
  for (const value of values) {
    if (!value) continue;

    if (!charCodes.has(value)) {
      throw new Error(`The value '${value}' doesn't exist in '${Array.from(charCodes.keys()).join(',')}'`);
    }

    escapeCodes += create8BitEscapeCode(charCodes.get(value)!);
  }

  return escapeCodes;
};
