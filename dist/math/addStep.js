"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addStep = void 0;
var types_1 = require("../types");
var getDate_1 = require("../getters/getDate");
/**
 * @returns Date with count * Step segments added
 */
var addStep = function (date, step, count) {
    if (step === void 0) { step = types_1.Step.Day; }
    if (count === void 0) { count = 0; }
    var d = getDate_1.getDate(date);
    var ms = d.getTime() + (step * count);
    return getDate_1.getDate(ms);
};
exports.addStep = addStep;
