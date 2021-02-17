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
exports.exclusiveRange = void 0;
var range_1 = require("./range");
/**
 * Get an inclusive range of Date as number[] up-to AND including end-date.
 * Short-hand for range(to, { ...config, inclusive: true })
 * @param to: PossibleConstructors
 * @param config: RangeConfig
 * @param config.step: Step (Step.Day) step size of the range elements
 * @param config.from: PossibleConstructors (Date.now())
 * @returns number[]
 */
var exclusiveRange = function (to, config) {
    if (config === void 0) { config = {}; }
    return range_1.range(to, __assign(__assign({}, config), { inclusive: false }));
};
exports.exclusiveRange = exclusiveRange;
