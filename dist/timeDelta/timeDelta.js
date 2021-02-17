"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeDelta = exports.getOperatorAndTotal = void 0;
var types_1 = require("../types");
var getDates_1 = require("../getters/getDates");
var equality_1 = require("../equality");
var getOperatorAndTotal = function (to, from) {
    var _a = getDates_1.getDates(to, from), toDate = _a[0], fromDate = _a[1];
    var operator = 1;
    if (equality_1.lt(toDate, fromDate))
        operator = -1;
    if (equality_1.gt(toDate, fromDate))
        operator = +1;
    var total = Math.abs(fromDate.getTime() - toDate.getTime());
    return [operator, total];
};
exports.getOperatorAndTotal = getOperatorAndTotal;
/**
 * @param target: PossibleConstructors target date
 * @param compare: PossibleConstructors compare date
 * @returns TimeDelta between two dates
 */
var timeDelta = function (to, from) {
    if (from === void 0) { from = Date.now(); }
    var _a = exports.getOperatorAndTotal(to, from), operator = _a[0], total = _a[1];
    var diff = total;
    var days = Math.floor(diff / types_1.Step.Day) * operator;
    diff -= Math.abs(days * types_1.Step.Day);
    var hours = Math.floor(diff / types_1.Step.Hour) * operator;
    diff -= Math.abs(hours * types_1.Step.Hour);
    var minutes = Math.floor(diff / types_1.Step.Minute) * operator;
    diff -= Math.abs(minutes * types_1.Step.Minute);
    var seconds = Math.floor(diff / types_1.Step.Second) * operator;
    diff -= Math.abs(seconds * types_1.Step.Second);
    var milliseconds = Math.floor(diff / types_1.Step.Millisecond) * operator;
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
