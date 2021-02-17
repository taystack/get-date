import { DateRange, PossibleConstructors, Step } from '../types';
export declare class TimeDeltaRange {
    end: PossibleConstructors;
    endTime: number;
    inclusive: boolean;
    max: number;
    pointer: Date;
    start: PossibleConstructors;
    step: Step;
    values: DateRange;
    constructor(start: PossibleConstructors, end: PossibleConstructors, step?: Step, inclusive?: boolean);
    range(): void;
    createValues(): void;
    setStep(step: Step): void;
    setInclusive(inclusive: boolean): void;
    setStart(start: PossibleConstructors): void;
    setEnd(end: PossibleConstructors): void;
}
