"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDatetimeLocalInputValue = void 0;
var getDate_1 = require("./getDate");
var getDateInputValue_1 = require("./getDateInputValue");
var getTimeString_1 = require("./getTimeString");
/**
 * @get input value for type="datetime-local"
 */
var getDatetimeLocalInputValue = function (date) {
    var d = getDate_1.getDate(date);
    return getDateInputValue_1.getDateInputValue(d) + "T" + getTimeString_1.getTimeString(d);
};
exports.getDatetimeLocalInputValue = getDatetimeLocalInputValue;
