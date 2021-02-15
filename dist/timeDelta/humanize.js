"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanize = exports.pluralizeTimeframe = void 0;
var timeDelta_1 = require("./timeDelta");
var isFuture_1 = require("./isFuture");
var pluralize_1 = require("../helpers/pluralize");
var humanizeTimeframe_1 = require("../humanize/humanizeTimeframe");
var types_1 = require("../types");
var pluralizeTimeframe = function (count, timeframe) {
    var timeframeText = humanizeTimeframe_1.humanizeTimeframe(timeframe);
    return pluralize_1.pluralize(count, timeframeText);
};
exports.pluralizeTimeframe = pluralizeTimeframe;
var validValue = function (value) {
    var abs = Math.abs(value);
    return [abs >= 1, abs];
};
var humanizeFew = function (count, timeframe) {
    if (count < 10) {
        return "a few " + humanizeTimeframe_1.humanizeTimeframe(timeframe) + "s";
    }
    return exports.pluralizeTimeframe(count, timeframe);
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
        return humanizeFew(minutes, types_1.Timeframe.Minute);
    }
    var absSeconds = Math.abs(delta.seconds);
    return humanizeFew(absSeconds, types_1.Timeframe.Second);
};
/**
 * Humanize a date with respect to another.
 * @param to: target datetime
 * @param from (optional) - defaults to Date.now()
 */
var humanize = function (to, from) {
    if (from === void 0) { from = Date.now(); }
    var delta = timeDelta_1.timeDelta(to, from);
    var humanAccuracy = determineAccuracy(delta);
    if (delta.total === 0) {
        return 'right now';
    }
    if (isFuture_1.isFuture(delta)) {
        return "in " + humanAccuracy;
    }
    return humanAccuracy + " ago";
};
exports.humanize = humanize;
