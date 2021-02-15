import { Timeframe, PossibleConstructors } from '../types';
/**
 * @returns Date with count * Timeframe segments added
 */
export declare const addTimeframe: (date: PossibleConstructors, timeframe?: Timeframe, count?: number) => Date;
