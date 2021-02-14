"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMonth = exports.getUTCMonth = exports.MONTHS = void 0;
var getDate_1 = require("../getters/getDate");
exports.MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var getUTCMonth = function (date) { return (exports.MONTHS[getDate_1.getDate(date).getUTCMonth()]); };
exports.getUTCMonth = getUTCMonth;
var getMonth = function (date) { return (exports.MONTHS[getDate_1.getDate(date).getMonth()]); };
exports.getMonth = getMonth;
