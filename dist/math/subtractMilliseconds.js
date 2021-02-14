"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractMilliseconds = void 0;
var addMilliseconds_1 = require("./addMilliseconds");
/**
 * @param milliseconds: number of millisecond segments to subtract
 * @returns new MathDate()
 */
var subtractMilliseconds = function (date, milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return addMilliseconds_1.addMilliseconds(date, -milliseconds);
};
exports.subtractMilliseconds = subtractMilliseconds;
