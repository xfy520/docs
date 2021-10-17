"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const clientAppEnhanceFiles = ({ app, router }) => {
    router.afterEach(() => {
        router.isReady().then(() => {
            if (typeof resizeLineNumbers !== 'undefined') {
                resizeLineNumbers();
            }
        });
    });
};
exports.default = clientAppEnhanceFiles;
