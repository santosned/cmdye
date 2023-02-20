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

export type AnyCodes = FormatCodes | `${FormatCodes},${string}` | '' | undefined | null;

export interface CmDyeMethods {
  apply: {
    (code: AnyCodes, ...optionalCodes: AnyCodes[]): string;
  };
}

export type CmDye = { (message: unknown, ...optionalMessage: unknown[]): CmDyeMethods };
