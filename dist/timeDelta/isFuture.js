"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isFuture = void 0;
/**
 * Determine if a timeDelta is pointed at the future
 */
var isFuture = function (delta) { return (delta.total > 0); };
exports.isFuture = isFuture;
