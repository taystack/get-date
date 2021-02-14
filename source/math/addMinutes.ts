import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * @param minutes: number of minute segments to add
 * @returns new MathDate()
 */
export const addMinutes = (date: PossibleConstructors, minutes = 0) => {
  return addTimeframe(date, Timeframe.Minute, minutes)
}
