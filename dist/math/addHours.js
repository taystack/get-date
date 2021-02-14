"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHours = void 0;
var types_1 = require("../types");
var addTimeframe_1 = require("./addTimeframe");
/**
 * @param hours: number of hour segments to add
 * @returns new MathDate()
 */
var addHours = function (date, hours) {
    if (hours === void 0) { hours = 0; }
    return addTimeframe_1.addTimeframe(date, types_1.Timeframe.Hour, hours);
};
exports.addHours = addHours;
