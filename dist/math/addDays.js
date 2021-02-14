"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = void 0;
var types_1 = require("../types");
var addTimeframe_1 = require("./addTimeframe");
/**
 * @param days: number of day segments to add
 * @returns new MathDate()
 */
var addDays = function (date, days) {
    if (days === void 0) { days = 0; }
    return addTimeframe_1.addTimeframe(date, types_1.Timeframe.Day, days);
};
exports.addDays = addDays;
