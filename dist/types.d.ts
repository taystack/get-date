export declare type PossibleConstructors = Date | string | number;
export declare enum Timeframe {
    Day,
    Hour,
    Minute,
    Second,
    Millisecond
}
export interface TimeDelta {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    total: number;
}
