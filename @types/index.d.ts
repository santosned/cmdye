export {};
declare type Styles =
  | 'bold'
  | 'light'
  | 'bright'
  | 'dim'
  | 'faint'
  | 'italic'
  | 'cursive'
  | 'underscore'
  | 'underline'
  | 'blink'
  | 'reverse'
  | 'invert'
  | 'hidden'
  | 'conceal'
  | 'strike-through'
  | 'crossed-out'
  | 'overline'
  | ''
  | null
  | undefined;
declare type Colors =
  | 'black'
  | 'red'
  | 'green'
  | 'yellow'
  | 'blue'
  | 'magenta'
  | 'cyan'
  | 'white'
  | 'crimson'
  | 'default'
  | 'lightblack'
  | 'lightred'
  | 'lightgreen'
  | 'lightyellow'
  | 'lightblue'
  | 'lightmagenta'
  | 'lightcyan'
  | 'lightwhite'
  | ''
  | null
  | undefined;
declare type Backgrounds = Colors;
declare class CmDye {
  private readonly message;
  private backgrounds;
  private colors;
  private styles;
  constructor(message: string, ...optionalMessages: string[]);
  toString(): string;
  style(...names: Styles[]): this;
  bg(...names: Backgrounds[]): this;
  color(...names: Colors[]): this;
}
/** Create new CmDye instance.
 * ```js
 * const msg = 'Console messages dye'
 * cmdye(msg).style('italic','underline').color('lightblue').toString()
 * // Returns: '\x1B[94;3;4mConsole messages dye\x1B[0m'
 * ```
 * @since v0.1.0*/
declare function cmdye(message: string, ...optionalMessage: string[]): CmDye;
export = cmdye;
