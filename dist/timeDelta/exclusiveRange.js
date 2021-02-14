"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exclusiveRange = void 0;
var types_1 = require("../types");
var range_1 = require("./range");
var exclusiveRange = function (from, to, timeframe) {
    if (timeframe === void 0) { timeframe = types_1.Timeframe.Day; }
    return range_1.range(from, to, timeframe);
};
exports.exclusiveRange = exclusiveRange;
