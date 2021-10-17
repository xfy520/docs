declare function resolveLineNumbers(info: string, reg: RegExp): Array<[number, number]> | null;
declare function isLineNumber(lineNumber: number, ranges: Array<[number, number]>): boolean;
export { resolveLineNumbers, isLineNumber, };
