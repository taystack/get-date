import { PossibleConstructors, Timeframe } from '../types';
export declare type DateRange = number[];
export declare class TimeDeltaRange {
    start: PossibleConstructors;
    end: PossibleConstructors;
    values: DateRange;
    comparator: Function;
    timeframe: Timeframe;
    inclusive: boolean;
    pointer: Date;
    endTime: number;
    constructor(start: PossibleConstructors, end: PossibleConstructors, timeframe?: Timeframe, inclusive?: boolean);
    range(): void;
    createValues(): void;
    setTimeframe(timeframe: Timeframe): void;
    setInclusive(inclusive: boolean): void;
    setStart(start: PossibleConstructors): void;
    setEnd(end: PossibleConstructors): void;
}
export declare const range: (from: PossibleConstructors, to: PossibleConstructors, timeframe?: Timeframe, inclusive?: boolean) => DateRange;
