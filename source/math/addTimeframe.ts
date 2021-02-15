import { Timeframe, PossibleConstructors } from '../types'
import { getDate } from '../getters/getDate'

/**
 * @returns Date with count * Timeframe segments added
 */
export const addTimeframe = (
  date: PossibleConstructors,
  timeframe: Timeframe = Timeframe.Day,
  count: number = 0
): Date => {
  let d = getDate(date)
  let ms = d.getTime() + (timeframe * count)
  return getDate(ms)
}
