"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const languages = __importStar(require("./languages"));
let languagesMap;
const getLanguagesMap = () => {
    if (!languagesMap) {
        languagesMap = Object.values(languages).reduce((result, item) => {
            item.aliases.forEach((alias) => {
                result[alias] = item;
            });
            return result;
        }, {});
    }
    return languagesMap;
};
exports.default = (info) => {
    var _a, _b;
    const alias = ((_a = info.match(/^([^ :[{]+)/)) === null || _a === void 0 ? void 0 : _a[1]) || 'text';
    return ((_b = getLanguagesMap()[alias]) !== null && _b !== void 0 ? _b : {
        name: alias,
        ext: alias,
        aliases: [alias],
    });
};
