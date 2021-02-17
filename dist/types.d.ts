/**
 * Normalizing Date creation by allowing Date to be returned if passed.
 */
export declare type PossibleConstructors = Date | string | number;
/**
 * Dates are stored as numbers in milliseconds since Jan 1, 1970 00:00:00.000
 */
export declare type DateRange = number[];
/**
 * Temporal segments of time
 */
export declare enum Step {
    /**
     * Step.Hour * 24
     */
    Day,
    /**
     * Step.Minute * 60
     */
    Hour,
    /**
     * Step.Second * 60
     */
    Minute,
    /**
     * Step.Millisecond * 1000
     */
    Second,
    /**
     * 1
     */
    Millisecond
}
export interface TimeDelta {
    /**
     * Difference in days +- after computing higher Steps
     */
    days: number;
    /**
     * Difference in hours +- after computing higher Steps
     */
    hours: number;
    /**
     * Difference in minutes +- after computing higher Steps
     */
    minutes: number;
    /**
     * Difference in seconds +- after computing higher Steps
     */
    seconds: number;
    /**
     * Difference in milliseconds +- after computing higher Steps
     */
    milliseconds: number;
    /**
     * Total difference in milliseconds +-
     */
    total: number;
}
