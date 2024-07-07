"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VuepressThemeFleet = void 0;
const theme_default_1 = require("@vuepress/theme-default");
const VuepressThemeFleet = (options) => {
    return () => {
        return {
            name: 'vuepress-theme-fleet',
            extends: (0, theme_default_1.defaultTheme)(options),
            plugins: options.plugins || [],
        };
    };
};
exports.VuepressThemeFleet = VuepressThemeFleet;
