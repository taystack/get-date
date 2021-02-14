"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leftPad = void 0;
var leftPad = function (value, width) {
    if (value === void 0) { value = 1; }
    if (width === void 0) { width = 2; }
    return value.toString().padStart(width, '0');
};
exports.leftPad = leftPad;
