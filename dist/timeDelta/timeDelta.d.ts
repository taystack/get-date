import { PossibleConstructors, TimeDelta } from '../types';
export declare const getOperatorAndTotal: (to: PossibleConstructors, from: PossibleConstructors) => [number, number];
/**
 * @param target: PossibleConstructors target date
 * @param compare: PossibleConstructors compare date
 * @returns TimeDelta between two dates
 */
export declare const timeDelta: (to: PossibleConstructors, from?: PossibleConstructors) => TimeDelta;
