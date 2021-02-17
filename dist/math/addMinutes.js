"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMinutes = void 0;
var types_1 = require("../types");
var addStep_1 = require("./addStep");
/**
 * Short-hand addStep() minutes
 */
var addMinutes = function (date, minutes) {
    if (minutes === void 0) { minutes = 0; }
    return addStep_1.addStep(date, types_1.Step.Minute, minutes);
};
exports.addMinutes = addMinutes;
