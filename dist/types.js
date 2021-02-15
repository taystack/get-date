"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeframe = void 0;
var constants_1 = require("./constants");
var Timeframe;
(function (Timeframe) {
    /**
     * Timeframe.Hour * 24
     */
    Timeframe[Timeframe["Day"] = constants_1.DAY] = "Day";
    /**
     * Timeframe.Minute * 60
     */
    Timeframe[Timeframe["Hour"] = constants_1.HOUR] = "Hour";
    /**
     * Timeframe.Second * 60
     */
    Timeframe[Timeframe["Minute"] = constants_1.MINUTE] = "Minute";
    /**
     * Timeframe.Millisecond * 1000
     */
    Timeframe[Timeframe["Second"] = constants_1.SECOND] = "Second";
    /**
     * 1
     */
    Timeframe[Timeframe["Millisecond"] = constants_1.MILLISECOND] = "Millisecond";
})(Timeframe = exports.Timeframe || (exports.Timeframe = {}));
