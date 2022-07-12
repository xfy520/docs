export const resolveLineHighlight = (info: string): string => {
  const match = info.match(/:{([\d,-]+)}/);
  return match ? match[1] : '';
}
