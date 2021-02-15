export declare type PossibleConstructors = Date | string | number;
export declare enum Timeframe {
    /**
     * Timeframe.Hour * 24
     */
    Day,
    /**
     * Timeframe.Minute * 60
     */
    Hour,
    /**
     * Timeframe.Second * 60
     */
    Minute,
    /**
     * Timeframe.Millisecond * 1000
     */
    Second,
    /**
     * 1
     */
    Millisecond
}
export interface TimeDelta {
    /**
     * Difference in days +- after computing higher timeframes
     */
    days: number;
    /**
     * Difference in hours +- after computing higher timeframes
     */
    hours: number;
    /**
     * Difference in minutes +- after computing higher timeframes
     */
    minutes: number;
    /**
     * Difference in seconds +- after computing higher timeframes
     */
    seconds: number;
    /**
     * Difference in milliseconds +- after computing higher timeframes
     */
    milliseconds: number;
    /**
     * Total difference in milliseconds +-
     */
    total: number;
}
