import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * @param milliseconds: number of millisecond segments to add
 * @returns new MathDate()
 */
export const addMilliseconds = (date: PossibleConstructors, milliseconds = 0) => {
  return addTimeframe(date, Timeframe.Millisecond, milliseconds)
}
