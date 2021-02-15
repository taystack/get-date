"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeString = void 0;
var helpers_1 = require("../helpers");
var getDate_1 = require("./getDate");
/**
 * @get time: string hh:mm:ss.SSS
 */
var getTimeString = function (date) {
    var d = getDate_1.getDate(date);
    var hours = helpers_1.leftPad(d.getUTCHours());
    var minutes = helpers_1.leftPad(d.getUTCMinutes());
    var seconds = helpers_1.leftPad(d.getUTCSeconds());
    var milliseconds = helpers_1.leftPad(d.getUTCMilliseconds(), 3);
    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
};
exports.getTimeString = getTimeString;
