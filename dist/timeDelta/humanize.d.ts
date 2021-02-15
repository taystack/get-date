import { PossibleConstructors, Timeframe } from '../types';
export declare const pluralizeTimeframe: (count: number, timeframe: Timeframe) => string;
/**
 * Humanize a date with respect to another.
 * @param to: target datetime
 * @param from (optional) - defaults to Date.now()
 */
export declare const humanize: (to: PossibleConstructors, from?: PossibleConstructors) => string;
