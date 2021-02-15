"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPast = void 0;
/**
 * Determine if a timeDelta is pointed at the past
 */
var isPast = function (delta) { return (delta.total < 0 || Object.is(delta.total, -0)); };
exports.isPast = isPast;
