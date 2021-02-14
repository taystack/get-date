import { PossibleConstructors, Timeframe } from '../types';
import { DateRange } from './range';
export declare const inclusiveRange: (from: PossibleConstructors, to: PossibleConstructors, timeframe?: Timeframe) => DateRange;
