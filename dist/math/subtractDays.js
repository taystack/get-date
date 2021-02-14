"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractDays = void 0;
var addDays_1 = require("./addDays");
/**
 * @param days: number of day segments to subtract
 * @returns new MathDate()
 */
var subtractDays = function (date, days) {
    if (days === void 0) { days = 0; }
    return addDays_1.addDays(date, -days);
};
exports.subtractDays = subtractDays;
