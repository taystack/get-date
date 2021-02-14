import { PossibleConstructors } from '../types';
/**
 * @param date: PossibleConstructors (MathDate, Date, string, number)
 * @returns boolean if target is before compare (!isAfter)
 */
export declare const isBefore: (target: PossibleConstructors, compare: PossibleConstructors) => boolean;
