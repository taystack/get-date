"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractMinutes = void 0;
var addMinutes_1 = require("./addMinutes");
/**
 * @param minutes: number of minute segments to subtract
 * @returns new MathDate()
 */
var subtractMinutes = function (date, minutes) {
    if (minutes === void 0) { minutes = 0; }
    return addMinutes_1.addMinutes(date, -minutes);
};
exports.subtractMinutes = subtractMinutes;
