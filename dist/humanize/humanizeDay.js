"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDay = exports.getUTCDay = exports.DAYS = void 0;
var getDate_1 = require("../getters/getDate");
/**
 * ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
 */
exports.DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var getUTCDay = function (date) { return (exports.DAYS[getDate_1.getDate(date).getUTCDay()]); };
exports.getUTCDay = getUTCDay;
var getDay = function (date) { return (exports.DAYS[getDate_1.getDate(date).getDay()]); };
exports.getDay = getDay;
