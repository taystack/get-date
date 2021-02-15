import { PossibleConstructors } from '../types'
import { getDate } from '../getters/getDate'
import { leftPad } from '../helpers/leftPad'

/**
 * @get input value for type=date
 */
export const getDateInputValue = (date: PossibleConstructors): string => {
  const d = getDate(date)
  const day = leftPad(d.getUTCDate()) // Not zero indexed
  const month = leftPad(d.getUTCMonth() + 1) // Zero indexed?
  const year = d.getUTCFullYear()
  return `${year}-${month}-${day}`
}
