"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Step = void 0;
var constants_1 = require("./constants");
/**
 * Temporal segments of time
 */
var Step;
(function (Step) {
    /**
     * Step.Hour * 24
     */
    Step[Step["Day"] = constants_1.DAY] = "Day";
    /**
     * Step.Minute * 60
     */
    Step[Step["Hour"] = constants_1.HOUR] = "Hour";
    /**
     * Step.Second * 60
     */
    Step[Step["Minute"] = constants_1.MINUTE] = "Minute";
    /**
     * Step.Millisecond * 1000
     */
    Step[Step["Second"] = constants_1.SECOND] = "Second";
    /**
     * 1
     */
    Step[Step["Millisecond"] = constants_1.MILLISECOND] = "Millisecond";
})(Step = exports.Step || (exports.Step = {}));
