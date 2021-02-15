import { PossibleConstructors } from '../types'
import { getDate } from '../getters/getDate'

/**
 * ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
 */
export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

export const getUTCMonth = (date: PossibleConstructors): string => (
  MONTHS[getDate(date).getUTCMonth()]
)

export const getMonth = (date: PossibleConstructors): string => (
  MONTHS[getDate(date).getMonth()]
)
