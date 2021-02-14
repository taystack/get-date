import { PossibleConstructors } from '../types'
import { addDays } from './addDays'

/**
 * @param days: number of day segments to subtract
 * @returns new MathDate()
 */
export const subtractDays = (date: PossibleConstructors, days: number = 0) => {
  return addDays(date, -days)
}
