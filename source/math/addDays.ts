import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * @param days: number of day segments to add
 * @returns new MathDate()
 */
export const addDays = (
  date: PossibleConstructors,
  days: number = 0
): Date => addTimeframe(date, Timeframe.Day, days)
