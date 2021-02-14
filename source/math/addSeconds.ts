import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * @param seconds: number of second segments to add
 * @returns new MathDate()
 */
export const addSeconds = (date: PossibleConstructors, seconds = 0) => {
  return addTimeframe(date, Timeframe.Second, seconds)
}
