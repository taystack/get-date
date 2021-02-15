"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDate = void 0;
/**
 * @returns Date from PossibleConstructors (Date, string, number, undefined.)
 * Preserves refferential equality if Date is passed. Creates new Date() for
 * string or number arguments.
 */
var getDate = function (date) {
    if (date === void 0) { date = Date.now(); }
    if (date instanceof Date) {
        return date;
    }
    return new Date(date);
};
exports.getDate = getDate;
