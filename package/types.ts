export type Styles =
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

export type Colors =
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

export type Backgrounds = Colors;

export type AnyCodes = Styles | Colors;
