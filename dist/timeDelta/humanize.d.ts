import { PossibleConstructors, Step } from '../types';
export declare const pluralizeStep: (count: number, Step: Step) => string;
/**
 * Humanize a date with respect to another.
 * @param to: target datetime
 * @param from (optional) - defaults to Date.now()
 */
export declare const humanize: (to: PossibleConstructors, from?: PossibleConstructors) => string;
