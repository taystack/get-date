"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inclusiveRange = void 0;
var types_1 = require("../types");
var range_1 = require("./range");
var inclusiveRange = function (from, to, timeframe) {
    if (timeframe === void 0) { timeframe = types_1.Timeframe.Day; }
    return range_1.range(from, to, timeframe, true);
};
exports.inclusiveRange = inclusiveRange;
