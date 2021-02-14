"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAfter = void 0;
var getDates_1 = require("../getters/getDates");
/**
 * @param date: PossibleConstructors (MathDate, Date, string, number)
 * @returns boolean if target is after compare
 */
var isAfter = function (target, compare) {
    var _a = getDates_1.getDates(target, compare), d1 = _a[0], d2 = _a[1];
    return d1.getTime() > d2.getTime();
};
exports.isAfter = isAfter;
