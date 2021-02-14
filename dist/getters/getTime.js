"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTime = void 0;
var getDate_1 = require("../getters/getDate");
var getTime = function (date) { return (typeof date === 'number' ? date : getDate_1.getDate(date).getTime()); };
exports.getTime = getTime;
