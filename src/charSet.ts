const MAX_LIMIT = 65_535;

export function getChars(from: number = 0, to: number = MAX_LIMIT) {
  if (from > to) throw new Error("'from' must be smaller than 'to'");
  to = to > MAX_LIMIT ? MAX_LIMIT : to;

  const chars: string[] = [];

  for (let i = from; i <= to; i++) chars.push(String.fromCharCode(i));

  return chars.join('');
}
