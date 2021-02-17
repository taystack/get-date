"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.humanize = exports.pluralizeStep = void 0;
var timeDelta_1 = require("./timeDelta");
var isFuture_1 = require("./isFuture");
var pluralize_1 = require("../helpers/pluralize");
var humanizeStep_1 = require("../humanize/humanizeStep");
var types_1 = require("../types");
var pluralizeStep = function (count, Step) {
    var StepText = humanizeStep_1.humanizeStep(Step);
    return pluralize_1.pluralize(count, StepText);
};
exports.pluralizeStep = pluralizeStep;
var validValue = function (value) {
    var abs = Math.abs(value);
    return [abs >= 1, abs];
};
var humanizeFew = function (count, Step) {
    if (count < 10) {
        return "a few " + humanizeStep_1.humanizeStep(Step) + "s";
    }
    return exports.pluralizeStep(count, Step);
};
var determineAccuracy = function (delta) {
    var _a = validValue(delta.days), validDays = _a[0], days = _a[1];
    if (validDays) {
        return exports.pluralizeStep(days, types_1.Step.Day);
    }
    var _b = validValue(delta.hours), validHours = _b[0], hours = _b[1];
    if (validHours) {
        return exports.pluralizeStep(hours, types_1.Step.Hour);
    }
    var _c = validValue(delta.minutes), validMinutes = _c[0], minutes = _c[1];
    if (validMinutes) {
        return humanizeFew(minutes, types_1.Step.Minute);
    }
    var absSeconds = Math.abs(delta.seconds);
    return humanizeFew(absSeconds, types_1.Step.Second);
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
