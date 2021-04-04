import { PossibleConstructors } from '../types'
import { DAY_NAMES } from '../types'
import { getDate } from '../getters/getDate'


export const humanizeUTCDay = (date: PossibleConstructors): string => (
  DAY_NAMES[getDate(date).getUTCDay()]
)

export const humanizeDay = (date: PossibleConstructors): string => (
  DAY_NAMES[getDate(date).getDay()]
)
