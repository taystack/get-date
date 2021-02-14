import { PossibleConstructors, Timeframe } from '../types';
import { DateRange } from './range';
export declare const exclusiveRange: (from: PossibleConstructors, to: PossibleConstructors, timeframe?: Timeframe) => DateRange;
