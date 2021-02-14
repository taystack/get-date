"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTimeframe = void 0;
var types_1 = require("../types");
var getDate_1 = require("../getters/getDate");
/**
 * @returns Date with Timeframe segments added
 */
var addTimeframe = function (date, timeframe, count) {
    if (timeframe === void 0) { timeframe = types_1.Timeframe.Day; }
    if (count === void 0) { count = 0; }
    var d = getDate_1.getDate(date);
    var ms = d.getTime() + (timeframe * count);
    return getDate_1.getDate(ms);
};
exports.addTimeframe = addTimeframe;
