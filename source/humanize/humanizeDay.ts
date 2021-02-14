import { PossibleConstructors } from '../types'
import { getDate } from '../getters/getDate'

export const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


export const getUTCDay = (date: PossibleConstructors): string => (
  DAYS[getDate(date).getUTCDay()]
)

export const getDay = (date: PossibleConstructors): string => (
  DAYS[getDate(date).getDay()]
)
