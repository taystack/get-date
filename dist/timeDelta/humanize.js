"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanize = exports.isPast = exports.isFuture = exports.pluralizeTimeframe = void 0;
var timeDelta_1 = require("./timeDelta");
var pluralize_1 = require("../helpers/pluralize");
var humanizeTimeframe_1 = require("../humanize/humanizeTimeframe");
var types_1 = require("../types");
var pluralizeTimeframe = function (count, timeframe) {
    var timeframeText = humanizeTimeframe_1.humanizeTimeframe(timeframe);
    return pluralize_1.pluralize(count, timeframeText);
};
exports.pluralizeTimeframe = pluralizeTimeframe;
var isFuture = function (delta) { return (delta.days > 0 || Object.is(delta.days, +0)); };
exports.isFuture = isFuture;
var isPast = function (delta) { return (delta.days < 0 || Object.is(delta.days, -0)); };
exports.isPast = isPast;
var validValue = function (value) {
    var abs = Math.abs(value);
    return [abs >= 1, abs];
};
var determineAccuracy = function (delta) {
    var _a = validValue(delta.days), validDays = _a[0], days = _a[1];
    if (validDays) {
        return exports.pluralizeTimeframe(days, types_1.Timeframe.Day);
    }
    var _b = validValue(delta.hours), validHours = _b[0], hours = _b[1];
    if (validHours) {
        return exports.pluralizeTimeframe(hours, types_1.Timeframe.Hour);
    }
    var _c = validValue(delta.minutes), validMinutes = _c[0], minutes = _c[1];
    if (validMinutes) {
        return exports.pluralizeTimeframe(minutes, types_1.Timeframe.Minute);
    }
    var absSeconds = Math.abs(delta.seconds);
    if (absSeconds < 10) {
        return 'a few seconds';
    }
    return exports.pluralizeTimeframe(absSeconds, types_1.Timeframe.Second);
};
var humanize = function (from, to) {
    if (to === void 0) { to = new Date(); }
    var delta = timeDelta_1.timeDelta(from, to);
    var humanAccuracy = determineAccuracy(delta);
    if (delta.total === 0) {
        return 'right now';
    }
    if (exports.isFuture(delta)) {
        return humanAccuracy + " from now";
    }
    if (exports.isPast(delta)) {
        return humanAccuracy + " ago";
    }
    return 'CANNOT DETERMINE';
};
exports.humanize = humanize;
