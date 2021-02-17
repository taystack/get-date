import { PossibleConstructors } from '../types'
import { getDates } from '../getters/getDates'

/**
 * @param target: PossibleConstructors target date
 * @param compare: PossibleConstructors compare date
 * @returns boolean if target is the same date AND time as compare
 */
export const eq = (
  target: PossibleConstructors,
  compare: PossibleConstructors
): boolean => {
  const [d1, d2] = getDates(target, compare)
  return d1.getTime() == d2.getTime()
}
