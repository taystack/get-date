"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeframe = void 0;
var constants_1 = require("./constants");
var Timeframe;
(function (Timeframe) {
    Timeframe[Timeframe["Day"] = constants_1.DAY] = "Day";
    Timeframe[Timeframe["Hour"] = constants_1.HOUR] = "Hour";
    Timeframe[Timeframe["Minute"] = constants_1.MINUTE] = "Minute";
    Timeframe[Timeframe["Second"] = constants_1.SECOND] = "Second";
    Timeframe[Timeframe["Millisecond"] = constants_1.MILLISECOND] = "Millisecond";
})(Timeframe = exports.Timeframe || (exports.Timeframe = {}));
