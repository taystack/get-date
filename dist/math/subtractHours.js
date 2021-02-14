"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractHours = void 0;
var addHours_1 = require("./addHours");
/**
 * @param hours: number of hour segments to subtract
 * @returns new MathDate()
 */
var subtractHours = function (date, hours) {
    if (hours === void 0) { hours = 0; }
    return addHours_1.addHours(date, -hours);
};
exports.subtractHours = subtractHours;
