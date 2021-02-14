"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDateInputValue = void 0;
var getDate_1 = require("../getters/getDate");
var leftPad_1 = require("../helpers/leftPad");
/**
 * @get input value for type=date
 */
var getDateInputValue = function (date) {
    var d = getDate_1.getDate(date);
    var day = leftPad_1.leftPad(d.getDate()); // Not zero indexed
    var month = leftPad_1.leftPad(d.getMonth() + 1); // Zero indexed?
    var year = d.getFullYear();
    return year + "-" + month + "-" + day;
};
exports.getDateInputValue = getDateInputValue;
