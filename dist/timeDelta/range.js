"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = exports.TimeDeltaRange = void 0;
var types_1 = require("../types");
var getDate_1 = require("../getters/getDate");
var normalizedRangeArguments = function (from, to) { return ([
    getDate_1.getDate(getDate_1.getDate(from).getTime()),
    getDate_1.getDate(to).getTime()
]); };
var exclusiveComparator = function (date, endTime) { return (date.getTime() < endTime); };
var inclusiveComparator = function (date, endTime) { return (date.getTime() <= endTime); };
var TimeDeltaRange = /** @class */ (function () {
    function TimeDeltaRange(start, end, timeframe, inclusive) {
        if (timeframe === void 0) { timeframe = types_1.Timeframe.Day; }
        if (inclusive === void 0) { inclusive = false; }
        this.values = [];
        this.comparator = exclusiveComparator;
        this.timeframe = types_1.Timeframe.Day;
        this.inclusive = false;
        this.pointer = new Date();
        this.endTime = new Date().getTime();
        this.start = start;
        this.end = end;
        this.timeframe = timeframe;
        this.inclusive = inclusive;
        this.createValues();
    }
    TimeDeltaRange.prototype.range = function () {
        this.comparator = this.inclusive ? inclusiveComparator : exclusiveComparator;
        this.timeframe = this.timeframe;
        while (this.comparator(this.pointer, this.endTime)) {
            this.values.push(this.pointer.getTime());
            this.pointer.setTime(this.pointer.getTime() + this.timeframe);
        }
    };
    TimeDeltaRange.prototype.createValues = function () {
        var _a = normalizedRangeArguments(this.start, this.end), pointer = _a[0], endTime = _a[1];
        this.comparator = this.inclusive ? inclusiveComparator : exclusiveComparator;
        this.pointer = pointer;
        this.endTime = endTime;
        this.values = [];
        this.range();
    };
    TimeDeltaRange.prototype.setTimeframe = function (timeframe) {
        this.timeframe = timeframe,
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
var range = function (from, to, timeframe, inclusive) {
    if (timeframe === void 0) { timeframe = types_1.Timeframe.Day; }
    if (inclusive === void 0) { inclusive = false; }
    return new TimeDeltaRange(from, to, timeframe, inclusive).values;
};
exports.range = range;
