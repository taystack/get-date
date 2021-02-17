"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addMilliseconds = void 0;
var types_1 = require("../types");
var addStep_1 = require("./addStep");
/**
 * Short-hand addStep() milliseconds
 */
var addMilliseconds = function (date, milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return addStep_1.addStep(date, types_1.Step.Millisecond, milliseconds);
};
exports.addMilliseconds = addMilliseconds;
