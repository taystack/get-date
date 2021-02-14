import { PossibleConstructors } from '../types'
import { getDates } from '../getters/getDates'

/**
 * @param date: PossibleConstructors (MathDate, Date, string, number)
 * @returns boolean if target is after compare
 */
export const isAfter = (
  target: PossibleConstructors,
  compare: PossibleConstructors
): boolean => {
  const [d1, d2] = getDates(target, compare)
  return d1.getTime() > d2.getTime()
}
