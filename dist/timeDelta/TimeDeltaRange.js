"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeDeltaRange = void 0;
var types_1 = require("../types");
var getDate_1 = require("../getters/getDate");
var normalizedRangeArguments = function (from, to) { return ([
    getDate_1.getDate(getDate_1.getDate(from).getTime()),
    getDate_1.getDate(to).getTime()
]); };
var exclusiveComparator = function (date, endTime) { return (date.getTime() < endTime); };
var inclusiveComparator = function (date, endTime) { return (date.getTime() <= endTime); };
var TimeDeltaRange = /** @class */ (function () {
    function TimeDeltaRange(start, end, step, inclusive) {
        if (step === void 0) { step = types_1.Step.Day; }
        if (inclusive === void 0) { inclusive = false; }
        this.endTime = new Date().getTime();
        this.inclusive = false;
        this.max = 100000;
        this.pointer = new Date();
        this.step = types_1.Step.Day;
        this.values = [];
        this.start = start;
        this.end = end;
        this.step = step;
        this.inclusive = inclusive;
        this.createValues();
    }
    TimeDeltaRange.prototype.range = function () {
        var count = 0; // Allowing the dev to set an infinite loop here is dangerous...
        var comparator = this.inclusive ? inclusiveComparator : exclusiveComparator;
        while (comparator(this.pointer, this.endTime) && count++ < this.max) {
            this.values.push(this.pointer.getTime());
            this.pointer.setTime(this.pointer.getTime() + this.step);
        }
    };
    TimeDeltaRange.prototype.createValues = function () {
        var _a = normalizedRangeArguments(this.start, this.end), pointer = _a[0], endTime = _a[1];
        this.pointer = pointer;
        this.endTime = endTime;
        this.values = [];
        this.range();
    };
    TimeDeltaRange.prototype.setStep = function (step) {
        this.step = step;
        this.createValues();
    };
    TimeDeltaRange.prototype.setInclusive = function (inclusive) {
        this.inclusive = inclusive;
        this.createValues();
    };
    TimeDeltaRange.prototype.setStart = function (start) {
        this.start = start;
        this.createValues();
    };
    TimeDeltaRange.prototype.setEnd = function (end) {
        this.end = end;
        this.createValues();
    };
    return TimeDeltaRange;
}());
exports.TimeDeltaRange = TimeDeltaRange;
