"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lt = void 0;
var getDates_1 = require("../getters/getDates");
/**
 * @param target: PossibleConstructors
 * @param compare: PossibleConstructors
 * @returns boolean if target is after compare
 */
var lt = function (target, compare) {
    var _a = getDates_1.getDates(target, compare), d1 = _a[0], d2 = _a[1];
    return d1 < d2;
};
exports.lt = lt;
