"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveDataSrc = void 0;
const resolveDataSrc = (info) => {
    const match = info.match(/:src\((.+)\)/);
    return match ? match[1] : '';
};
exports.resolveDataSrc = resolveDataSrc;
