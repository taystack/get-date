"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeDelta = void 0;
var types_1 = require("../types");
var getDates_1 = require("../getters/getDates");
var isBefore_1 = require("../equality/isBefore");
var isAfter_1 = require("../equality/isAfter");
var getOperatorAndTotal = function (to, from) {
    if (from === void 0) { from = new Date(); }
    var _a = getDates_1.getDates(to, from), compare = _a[0], recent = _a[1];
    var operator = 1;
    if (isBefore_1.isBefore(compare, recent))
        operator = -1;
    if (isAfter_1.isAfter(compare, recent))
        operator = +1;
    var total = Math.abs(recent.getTime() - compare.getTime());
    return [operator, total];
};
/**
 * @param target: PossibleConstructors target date
 * @param compare: PossibleConstructors compare date
 * @returns TimeDelta between two dates
 */
var timeDelta = function (to, from) {
    if (from === void 0) { from = new Date(); }
    var _a = getOperatorAndTotal(to, from), operator = _a[0], total = _a[1];
    var diff = total;
    var days = Math.floor(diff / types_1.Timeframe.Day) * operator;
    diff -= Math.abs(days * types_1.Timeframe.Day);
    var hours = Math.floor(diff / types_1.Timeframe.Hour) * operator;
    diff -= Math.abs(hours * types_1.Timeframe.Hour);
    var minutes = Math.floor(diff / types_1.Timeframe.Minute) * operator;
    diff -= Math.abs(minutes * types_1.Timeframe.Minute);
    var seconds = Math.floor(diff / types_1.Timeframe.Second) * operator;
    diff -= Math.abs(seconds * types_1.Timeframe.Second);
    var milliseconds = Math.floor(diff / types_1.Timeframe.Millisecond) * operator;
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        total: total * operator,
    };
};
exports.timeDelta = timeDelta;
