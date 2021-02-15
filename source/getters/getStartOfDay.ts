import { PossibleConstructors } from '../types'
import { getDate } from './getDate'

/**
 * @returns new Date() from PossibleConstructors (Date, string, number, undefined.)
 * Where UTC time is zeroed-out
 */
export const getStartOfDay = (date: PossibleConstructors = new Date()): Date => {
  const dateString = getDate(date).toJSON().split('T')[0]
  return getDate(`${dateString}T00:00:00Z`)
}
