"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEqual = void 0;
var getDates_1 = require("../getters/getDates");
/**
 * @param target: PossibleConstructors target date
 * @param compare: PossibleConstructors compare date
 * @returns boolean if target is the same date AND time as compare
 */
var isEqual = function (target, compare) {
    var _a = getDates_1.getDates(target, compare), d1 = _a[0], d2 = _a[1];
    return d1.getTime() == d2.getTime();
};
exports.isEqual = isEqual;
