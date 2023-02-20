export {};
type ColorNames = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white';
type StyleNames =
  | 'bold'
  | 'dim'
  | 'italic'
  | 'underline'
  | 'blink'
  | 'reverse'
  | 'hidden'
  | 'strike-through'
  | 'overline';
type Styles = StyleNames | 'reset' | `!${StyleNames}`;
type Colors = ColorNames | `bg-${ColorNames}` | `!${'fg' | 'bg'}`;
type FormatCodes = Styles | Colors;
declare type AnyCodes = FormatCodes | `${FormatCodes},${string}` | '' | undefined | null;
declare interface CmDyeMethods {
  /** Select which colors should be applied to the message.*/
  apply: {
    (code: AnyCodes, ...optionalCodes: AnyCodes[]): string;
  };
}
declare type CmDye = {
  (message: unknown, ...optionalMessage: unknown[]): CmDyeMethods;
};
/** Colorify console message.
 * ```js
 * const warn = (msg) => {
 *   return cmdye('%cWARN%c', msg).apply('bold,yellow', '!bold');
 * }
 *
 * console.log(warn('this is a warning message'));
 * ```*/
declare const cmdye: CmDye;
export = cmdye;
