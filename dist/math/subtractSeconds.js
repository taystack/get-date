"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractSeconds = void 0;
var addSeconds_1 = require("./addSeconds");
/**
 * @param seconds: number of minute segments to subtract
 * @returns new MathDate()
 */
var subtractSeconds = function (date, seconds) {
    if (seconds === void 0) { seconds = 0; }
    return addSeconds_1.addSeconds(date, -seconds);
};
exports.subtractSeconds = subtractSeconds;
