"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.whiteSpace = exports.startLine = exports.resolveLineNumbers = void 0;
const resolveLineNumbers = (info) => {
    if (/:no-line-numbers|no-ln\b/.test(info)) {
        return false;
    }
    return true;
};
exports.resolveLineNumbers = resolveLineNumbers;
const startLine = (info, content) => {
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
};
exports.startLine = startLine;
const whiteSpace = (info) => {
    if (/:pre-line\b/.test(info)) {
        return 'pre-line';
    }
    if (/:pre-wrap\b/.test(info)) {
        return 'pre-wrap';
    }
    return '';
};
exports.whiteSpace = whiteSpace;
