"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMinutes = void 0;
var types_1 = require("../types");
var addTimeframe_1 = require("./addTimeframe");
/**
 * @param minutes: number of minute segments to add
 * @returns new MathDate()
 */
var addMinutes = function (date, minutes) {
    if (minutes === void 0) { minutes = 0; }
    return addTimeframe_1.addTimeframe(date, types_1.Timeframe.Minute, minutes);
};
exports.addMinutes = addMinutes;
