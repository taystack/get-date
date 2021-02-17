"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
var types_1 = require("../types");
var TimeDeltaRange_1 = require("./TimeDeltaRange");
var defaultConfig = {
    inclusive: false,
    from: Date.now(),
    step: types_1.Step.Day,
};
/**
 * Get a range of Date as number[]
 * @param to: PossibleConstructors
 * @param config: RangeConfig
 * @param config.inclusive: boolean (false) Normal behavior is up-to the end date
 * @param config.from: PossibleConstructors (Date.now())
 * @param config.step: Step (Step.Day) step size of the range elements
 * @returns number[]
 */
var range = function (to, config) {
    var _a = __assign(__assign({}, defaultConfig), config), from = _a.from, step = _a.step, inclusive = _a.inclusive;
    return new TimeDeltaRange_1.TimeDeltaRange(from, to, step, inclusive).values;
};
exports.range = range;
