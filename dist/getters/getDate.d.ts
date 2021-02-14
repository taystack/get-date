import { PossibleConstructors } from '../types';
/**
 * @returns Date from PossibleConstructors (Date, string, number, undefined.)
 * Preserves refferential equality if Date is passed. Creates new Date() for
 * string or number arguments.
 */
export declare const getDate: (date?: PossibleConstructors) => Date;
