import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * @param hours: number of hour segments to add
 * @returns new MathDate()
 */
export const addHours = (date: PossibleConstructors, hours = 0) => {
  return addTimeframe(date, Timeframe.Hour, hours)
}
