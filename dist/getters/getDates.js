"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDates = void 0;
var getDate_1 = require("./getDate");
/**
 * @returns Date[] from PossibleConstructors[] (Date, string, number, undefined)
 */
var getDates = function () {
    var dates = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dates[_i] = arguments[_i];
    }
    return dates.map(function (date) { return getDate_1.getDate(date); });
};
exports.getDates = getDates;
