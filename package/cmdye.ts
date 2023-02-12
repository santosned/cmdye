import { bgCodes, colorCodes, regexCodes, styleCodes } from './codes';
import { fromMonoFormat, fromSubstitutionPattern, fromUserInput, join } from './helpers';
import { Backgrounds, Colors, Styles } from './types';

export class CmDye {
  private readonly message: string;
  private backgrounds: Set<number>;
  private colors: Set<number>;
  private styles: Set<number[]>;

  constructor(message: string, ...optionalMessages: string[]) {
    this.message = join(message, ...optionalMessages);
    this.backgrounds = new Set();
    this.colors = new Set();
    this.styles = new Set();
  }

  public toString() {
    const message = this.message;

    const { backgrounds, colors, styles } = this;

    if (!message.match(regexCodes.get('patterns') as RegExp)) {
      return fromMonoFormat(message, {
        backgrounds,
        colors,
        styles,
      });
    }

    return fromSubstitutionPattern(message, {
      backgrounds,
      colors,
      styles,
    });
  }

  public style(...names: Styles[]) {
    this.styles.add(fromUserInput(names, styleCodes));
    return this;
  }

  public bg(...names: Backgrounds[]) {
    for (const code of fromUserInput(names, bgCodes)) {
      this.backgrounds.add(code);
    }
    return this;
  }

  public color(...names: Colors[]) {
    for (const code of fromUserInput(names, colorCodes)) {
      this.colors.add(code);
    }
    return this;
  }
}

/**
 * Create new CmDye instance.
 * ```js
 * const msg = 'Console messages dye'
 * cmdye(msg).style('italic','underline').color('lightblue').toString()
 * // Returns: '\x1B[94;3;4mConsole messages dye\x1B[0m'
 * ```
 * @since v0.1.0
 */
export function cmdye(message: string, ...optionalMessage: string[]) {
  return new CmDye(message, ...optionalMessage);
}
