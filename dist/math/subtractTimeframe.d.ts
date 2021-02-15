import { Timeframe, PossibleConstructors } from '../types';
/**
 * short-hand for addTimeframe(date, timeframe, -count)
 */
export declare const subtractTimeframe: (date: PossibleConstructors, timeframe?: Timeframe, count?: number) => Date;
