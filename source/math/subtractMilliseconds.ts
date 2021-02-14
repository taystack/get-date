import { PossibleConstructors } from '../types'
import { addMilliseconds } from './addMilliseconds'

/**
 * @param milliseconds: number of millisecond segments to subtract
 * @returns new MathDate()
 */
export const subtractMilliseconds = (date: PossibleConstructors, milliseconds: number = 0) => {
  return addMilliseconds(date, -milliseconds)
}
