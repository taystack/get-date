import { PossibleConstructors } from '../types'
import { getDates } from '../getters/getDates'

/**
 * @param date: PossibleConstructors (MathDate, Date, string, number)
 * @returns boolean if target is before compare (!isAfter)
 */
export const isBefore = (
  target: PossibleConstructors,
  compare: PossibleConstructors
): boolean => {
  const [d1, d2] = getDates(target, compare)
  return d1.getTime() < d2.getTime()
}
