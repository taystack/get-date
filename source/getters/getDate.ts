import { PossibleConstructors } from '../types'

/**
 * @returns Date from PossibleConstructors (Date, string, number, undefined.)
 * Preserves refferential equality if Date is passed. Creates new Date() for
 * string or number arguments.
 */
export const getDate = (date: PossibleConstructors = new Date()): Date => {
  if (date instanceof Date) { return date }
  return new Date(date)
}
