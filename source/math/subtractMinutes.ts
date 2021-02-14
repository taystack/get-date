import { PossibleConstructors } from '../types'
import { addMinutes } from './addMinutes'

/**
 * @param minutes: number of minute segments to subtract
 * @returns new MathDate()
 */
export const subtractMinutes = (date: PossibleConstructors, minutes: number = 0) => {
  return addMinutes(date, -minutes)
}
