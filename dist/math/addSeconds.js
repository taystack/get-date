"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSeconds = void 0;
var types_1 = require("../types");
var addTimeframe_1 = require("./addTimeframe");
/**
 * @param seconds: number of second segments to add
 * @returns new MathDate()
 */
var addSeconds = function (date, seconds) {
    if (seconds === void 0) { seconds = 0; }
    return addTimeframe_1.addTimeframe(date, types_1.Timeframe.Second, seconds);
};
exports.addSeconds = addSeconds;
