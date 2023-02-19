export default function create8BitEscapeCode(...codes: number[]): string {
  let escapeCodes = '';

  for (const code of codes) {
    escapeCodes += String.fromCharCode(0x1b);
    escapeCodes += '[';
    escapeCodes += code;
    escapeCodes += 'm';
  }

  return escapeCodes;
}
