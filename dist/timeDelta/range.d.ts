import { DateRange, PossibleConstructors, Step } from '../types';
/**
 * Config arguments for getting a range of dates with range().
 */
export interface RangeConfig {
    /**
     * Step step. Analog to <input type="datetime" step="x" />
     */
    step?: Step;
    inclusive?: boolean;
    from?: PossibleConstructors;
}
/**
 * Get a range of Date as number[]
 * @param to: PossibleConstructors
 * @param config: RangeConfig
 * @param config.inclusive: boolean (false) Normal behavior is up-to the end date
 * @param config.from: PossibleConstructors (Date.now())
 * @param config.step: Step (Step.Day) step size of the range elements
 * @returns number[]
 */
export declare const range: (to: PossibleConstructors, config?: RangeConfig | undefined) => DateRange;
