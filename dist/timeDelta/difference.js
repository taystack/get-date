"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.difference = void 0;
var getDate_1 = require("../getters/getDate");
var timeDelta_1 = require("./timeDelta");
var difference = function (from, to) {
    return timeDelta_1.timeDelta(getDate_1.getDate(from), getDate_1.getDate(to));
};
exports.difference = difference;
