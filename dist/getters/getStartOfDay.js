"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStartOfDay = void 0;
var getDate_1 = require("./getDate");
/**
 * @returns new Date() from PossibleConstructors (Date, string, number, undefined.)
 * Where UTC time is zeroed-out
 */
var getStartOfDay = function (date) {
    if (date === void 0) { date = new Date(); }
    var dateString = getDate_1.getDate(date).toJSON().split('T')[0];
    return getDate_1.getDate(dateString + "T00:00:00Z");
};
exports.getStartOfDay = getStartOfDay;
