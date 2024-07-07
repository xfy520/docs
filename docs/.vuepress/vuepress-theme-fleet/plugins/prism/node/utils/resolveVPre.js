"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (info) => {
    if (/:v-pre\b/.test(info)) {
        return true;
    }
    if (/:no-v-pre\b/.test(info)) {
        return false;
    }
    return null;
};
