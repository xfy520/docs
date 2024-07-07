"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveLineHighlight = void 0;
const resolveLineHighlight = (info) => {
    const match = info.match(/:{([\d,-]+)}/);
    return match ? match[1] : '';
};
exports.resolveLineHighlight = resolveLineHighlight;
