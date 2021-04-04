import { PossibleConstructors } from '../types'
import { getDates } from '../getters/getDates'

/**
 * @param target: PossibleConstructors
 * @param compare: PossibleConstructors
 * @returns boolean if target is before or equal to compare
 */
export const lte = (
  target: PossibleConstructors,
  compare: PossibleConstructors
): boolean => {
  const [d1, d2] = getDates(target, compare)
  return d1 <= d2
}
