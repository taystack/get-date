"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSeconds = void 0;
var types_1 = require("../types");
var addStep_1 = require("./addStep");
/**
 * Short-hand addStep() with seconds
 */
var addSeconds = function (date, seconds) {
    if (seconds === void 0) { seconds = 0; }
    return addStep_1.addStep(date, types_1.Step.Second, seconds);
};
exports.addSeconds = addSeconds;
