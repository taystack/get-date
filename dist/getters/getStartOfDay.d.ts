import { PossibleConstructors } from '../types';
/**
 * @returns new Date() from PossibleConstructors (Date, string, number, undefined.)
 * Where UTC time is zeroed-out
 */
export declare const getStartOfDay: (date?: PossibleConstructors) => Date;
