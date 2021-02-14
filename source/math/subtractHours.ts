import { PossibleConstructors } from '../types'
import { addHours } from './addHours'

/**
 * @param hours: number of hour segments to subtract
 * @returns new MathDate()
 */
export const subtractHours = (date: PossibleConstructors, hours: number = 0) => {
  return addHours(date, -hours)
}
