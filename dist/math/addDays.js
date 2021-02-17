"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDays = void 0;
var types_1 = require("../types");
var addStep_1 = require("./addStep");
/**
 * @param days: number of day segments to add
 * @returns new MathDate()
 */
var addDays = function (date, days) {
    if (days === void 0) { days = 0; }
    return addStep_1.addStep(date, types_1.Step.Day, days);
};
exports.addDays = addDays;
