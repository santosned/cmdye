import { regexCodes } from './codes';
import { createCharCode } from './createCharCode';
import { AnyCodes } from './types';

export const join = (msg: string, ...optionalMessages: string[]) => {
  let message = msg;
  if (optionalMessages.length > 0) {
    const oMsg = optionalMessages.join(' ');
    message += oMsg.length > 0 ? ' ' : '';
    message += oMsg;
  }
  return message;
};

export function fromUserInput(names: AnyCodes[], store: Map<string, number>): number[] {
  const codes = [];

  for (const name of names) {
    if (name && !store.has(name)) {
      throw new Error("Unknown '" + name + "' name please select a new one.");
    }
    codes.push(store.get(name ?? '') ?? -1);
  }
  return codes;
}

export function fromMonoFormat(
  message: string,
  codes: { backgrounds: Set<number>; colors: Set<number>; styles: Set<number[]> }
) {
  const backgrounds = Array.from(codes.backgrounds)[codes.backgrounds.size - 1];
  const colors = Array.from(codes.colors)[codes.colors.size - 1];
  const styles = Array.from(codes.styles)[codes.styles.size - 1];
  const formatCode = createCharCode(
    backgrounds > 0 ? backgrounds : -1,
    colors > 0 ? colors : -1,
    ...(styles?.length > 0 ? styles : [])
  );

  const closure = formatCode ? createCharCode(0) : '';

  return formatCode + message + closure;
}

export function fromSubstitutionPattern(
  message: string,
  codes: { backgrounds: Set<number>; colors: Set<number>; styles: Set<number[]> }
) {
  const backgrounds = Array.from(codes.backgrounds);
  const colors = Array.from(codes.colors);
  const styles = Array.from(codes.styles);

  // This is only used by the %b string substitution pattern to count which index should be used.
  let blockPoint = -1;

  return message.replace(regexCodes.get('patterns') as RegExp, (match: string) => {
    switch (match) {
      case '%f':
        blockPoint += 1;
        return createCharCode(backgrounds[blockPoint] ?? -1, colors[blockPoint] ?? -1, ...(styles[blockPoint] ?? [-1]));
      case '%c':
      default:
        return createCharCode(0);
    }
  });
}
