import { PossibleConstructors, TimeDelta } from '../types'
import { getDate } from '../getters/getDate'
import { timeDelta } from './timeDelta'


export const difference = (
  from: PossibleConstructors,
  to: PossibleConstructors,
): TimeDelta => {
  return timeDelta(getDate(from), getDate(to))
}
