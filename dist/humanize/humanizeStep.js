"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanizeStep = void 0;
var types_1 = require("../types");
var humanizeStep = function (step) {
    var _a;
    return ((_a = {},
        _a[types_1.Step.Day] = 'day',
        _a[types_1.Step.Hour] = 'hour',
        _a[types_1.Step.Minute] = 'minute',
        _a[types_1.Step.Second] = 'second',
        _a[types_1.Step.Millisecond] = 'millisecond',
        _a)[step]);
};
exports.humanizeStep = humanizeStep;
