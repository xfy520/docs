"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MermaidLogLevel = exports.MermaidTheme = exports.MermaidSecurityLevel = void 0;
var MermaidSecurityLevel;
(function (MermaidSecurityLevel) {
    MermaidSecurityLevel["Strict"] = "strict";
    MermaidSecurityLevel["Loose"] = "loose";
    MermaidSecurityLevel["Antiscript"] = "antiscript";
    MermaidSecurityLevel["Sandbox"] = "sandbox";
})(MermaidSecurityLevel = exports.MermaidSecurityLevel || (exports.MermaidSecurityLevel = {}));
var MermaidTheme;
(function (MermaidTheme) {
    MermaidTheme["Base"] = "base";
    MermaidTheme["Forest"] = "forest";
    MermaidTheme["Dark"] = "dark";
    MermaidTheme["Default"] = "default";
    MermaidTheme["Neutral"] = "neutral";
})(MermaidTheme = exports.MermaidTheme || (exports.MermaidTheme = {}));
var MermaidLogLevel;
(function (MermaidLogLevel) {
    MermaidLogLevel[MermaidLogLevel["Debug"] = 1] = "Debug";
    MermaidLogLevel[MermaidLogLevel["Info"] = 2] = "Info";
    MermaidLogLevel[MermaidLogLevel["Warn"] = 3] = "Warn";
    MermaidLogLevel[MermaidLogLevel["Error"] = 4] = "Error";
    MermaidLogLevel[MermaidLogLevel["Fatal"] = 5] = "Fatal";
})(MermaidLogLevel = exports.MermaidLogLevel || (exports.MermaidLogLevel = {}));
