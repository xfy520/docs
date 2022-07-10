export const resolveLineNumbers = (info: string): boolean | null => {
  if (/:no-line-numbers|no-ln\b/.test(info)) {
    return false
  }
  return true
}

export const startLine = (info: string, content: string): number => {
  const NEW_LINE_EXP = /\n(?!$)/g;
  const linesMatch = content.match(NEW_LINE_EXP);
  const linesNum = linesMatch ? linesMatch.length + 1 : 1;
  const match = info.match(/:([\d,-]+)/);
  let startLine = 1;
  if (match) {
    startLine = Number.parseInt(match[1], 10);
  }
  if (startLine < 0 && Math.abs(startLine) > linesNum) {
    startLine = 1;
  }
  return startLine;
}

export const whiteSpace = (info: string): string => {
  if (/:pre-line\b/.test(info)) {
    return 'pre-line'
  }
  if (/:pre-wrap\b/.test(info)) {
    return 'pre-wrap'
  }
  return '';
}
