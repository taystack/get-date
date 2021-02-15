"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMilliseconds = void 0;
var types_1 = require("../types");
var addTimeframe_1 = require("./addTimeframe");
/**
 * Short-hand addTimeframe() milliseconds
 */
var addMilliseconds = function (date, milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return addTimeframe_1.addTimeframe(date, types_1.Timeframe.Millisecond, milliseconds);
};
exports.addMilliseconds = addMilliseconds;
