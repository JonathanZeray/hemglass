export function extractQuantity(htmlDescription: string): number {
  const match = htmlDescription.match(/(\d+)\s*(st|x|×)/i);
  if (!match) return 1;
  return parseInt(match[1], 10);
}
