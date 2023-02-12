export function createCharCode(...codes: number[]): string {
  codes = codes.filter((c) => typeof c === 'number' && isFinite(c) && c >= 0);

  if (codes.length === 0) return '';

  let c = String.fromCharCode(0x1b);
  c += '[';
  c += codes.join(';');
  c += 'm';

  return c;
}
