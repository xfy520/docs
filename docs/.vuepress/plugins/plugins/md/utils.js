"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLineNumber = exports.resolveLineNumbers = void 0;
function resolveLineNumbers(info, reg) {
    const match = info.match(reg);
    if (match === null) {
        return null;
    }
    return match[1].split(',').map((item) => {
        const range = item.split('-');
        if (range.length === 1) {
            range.push(range[0]);
        }
        return range.map((str) => Number.parseInt(str, 10));
    });
}
exports.resolveLineNumbers = resolveLineNumbers;
function isLineNumber(lineNumber, ranges) {
    return ranges.some(([start, end]) => lineNumber >= start && lineNumber <= end);
}
exports.isLineNumber = isLineNumber;
