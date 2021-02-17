"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractHours = void 0;
var addHours_1 = require("./addHours");
/**
 * Short-hand subtractStep() hours
 */
var subtractHours = function (date, hours) {
    if (hours === void 0) { hours = 0; }
    return addHours_1.addHours(date, -hours);
};
exports.subtractHours = subtractHours;
