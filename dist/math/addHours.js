"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addHours = void 0;
var types_1 = require("../types");
var addStep_1 = require("./addStep");
/**
 * Short-hand addStep() hours
 */
var addHours = function (date, hours) {
    if (hours === void 0) { hours = 0; }
    return addStep_1.addStep(date, types_1.Step.Hour, hours);
};
exports.addHours = addHours;
