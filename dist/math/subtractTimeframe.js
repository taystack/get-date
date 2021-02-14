"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractTimeframe = void 0;
var types_1 = require("../types");
var addTimeframe_1 = require("./addTimeframe");
/**
 * @returns Date with Timeframe segments subtracted
 */
var subtractTimeframe = function (date, timeframe, count) {
    if (timeframe === void 0) { timeframe = types_1.Timeframe.Day; }
    if (count === void 0) { count = 0; }
    return addTimeframe_1.addTimeframe(date, timeframe, -count);
};
exports.subtractTimeframe = subtractTimeframe;
