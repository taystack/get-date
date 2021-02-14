import { PossibleConstructors } from '../types'
import { getDate } from './getDate'

/**
 * @returns Date[] from PossibleConstructors[] (Date, string, number, undefined)
 */
export const getDates = (...dates: PossibleConstructors[]): Date[] =>
  dates.map((date: PossibleConstructors) => getDate(date))
