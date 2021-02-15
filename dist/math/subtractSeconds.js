"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractSeconds = void 0;
var addSeconds_1 = require("./addSeconds");
/**
 * Short-hand subtractTimeframe() seconds
 */
var subtractSeconds = function (date, seconds) {
    if (seconds === void 0) { seconds = 0; }
    return addSeconds_1.addSeconds(date, -seconds);
};
exports.subtractSeconds = subtractSeconds;
