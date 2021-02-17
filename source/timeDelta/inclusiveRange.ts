import { DateRange, PossibleConstructors } from '../types'
import { range, RangeConfig } from './range'


/**
 * Get an inclusive range of Date as number[] up-to AND including end-date.
 * Short-hand for range(to, { ...config, inclusive: true })
 * @param to: PossibleConstructors
 * @param config: RangeConfig
 * @param config.step: Step (Step.Day) step size of the range elements
 * @param config.from: PossibleConstructors (Date.now())
 * @returns number[]
 */
export const inclusiveRange = (
  to: PossibleConstructors,
  config: RangeConfig = {}
): DateRange => range(to, { ...config, inclusive: true })
