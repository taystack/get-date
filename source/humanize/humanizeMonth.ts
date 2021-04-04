import { PossibleConstructors } from '../types'
import { MONTH_NAMES } from '../types'
import { getDate } from '../getters/getDate'


export const humanizeUTCMonth = (date: PossibleConstructors): string => (
  MONTH_NAMES[getDate(date).getUTCMonth()]
)

export const humanizeMonth = (date: PossibleConstructors): string => (
  MONTH_NAMES[getDate(date).getMonth()]
)
