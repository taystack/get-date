import { PossibleConstructors } from '../types'
import { addSeconds } from './addSeconds'

/**
 * @param seconds: number of minute segments to subtract
 * @returns new MathDate()
 */
export const subtractSeconds = (date: PossibleConstructors, seconds: number = 0) => {
  return addSeconds(date, -seconds)
}
