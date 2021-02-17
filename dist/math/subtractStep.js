"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subtractStep = void 0;
var types_1 = require("../types");
var addStep_1 = require("./addStep");
/**
 * short-hand for addStep(date, Step, -count)
 */
var subtractStep = function (date, step, count) {
    if (step === void 0) { step = types_1.Step.Day; }
    if (count === void 0) { count = 0; }
    return addStep_1.addStep(date, step, -count);
};
exports.subtractStep = subtractStep;
