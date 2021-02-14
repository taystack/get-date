"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DAY = exports.HOUR = exports.MINUTE = exports.SECOND = exports.MILLISECOND = void 0;
exports.MILLISECOND = 1; // Beautiful identity (no magic numbers here)
exports.SECOND = exports.MILLISECOND * 1000;
exports.MINUTE = exports.SECOND * 60;
exports.HOUR = exports.MINUTE * 60;
exports.DAY = exports.HOUR * 24;
