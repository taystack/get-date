import { PossibleConstructors } from '../types'
import { getDates } from '../getters/getDates'

/**
 * @param target: PossibleConstructors
 * @param compare: PossibleConstructors
 * @returns boolean if target is after compare
 */
export const lt = (
  target: PossibleConstructors,
  compare: PossibleConstructors
): boolean => {
  const [d1, d2] = getDates(target, compare)
  return d1 < d2
}
