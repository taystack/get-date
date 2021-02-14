"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanizeTimeframe = void 0;
var types_1 = require("../types");
var humanizeTimeframe = function (timeframe) {
    var _a;
    return ((_a = {},
        _a[types_1.Timeframe.Day] = 'day',
        _a[types_1.Timeframe.Hour] = 'hour',
        _a[types_1.Timeframe.Minute] = 'minute',
        _a[types_1.Timeframe.Second] = 'second',
        _a)[timeframe]);
};
exports.humanizeTimeframe = humanizeTimeframe;
