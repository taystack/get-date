import { PossibleConstructors, TimeDelta, Timeframe } from '../types';
export declare const pluralizeTimeframe: (count: number, timeframe: Timeframe) => string;
export declare const isFuture: (delta: TimeDelta) => boolean;
export declare const isPast: (delta: TimeDelta) => boolean;
export declare const humanize: (from: PossibleConstructors, to?: PossibleConstructors) => string;
