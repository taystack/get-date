import { Timeframe, PossibleConstructors } from '../types';
/**
 * @returns Date with Timeframe segments subtracted
 */
export declare const subtractTimeframe: (date: PossibleConstructors, timeframe?: Timeframe, count?: number) => Date;
