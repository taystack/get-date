import { PossibleConstructors } from '../types'
import { getDate } from './getDate'
import { getDateInputValue } from './getDateInputValue'
import { getTimeString } from './getTimeString'

/**
 * @get input value for type="datetime-local"
 */
export const getDatetimeLocalInputValue = (date: PossibleConstructors): string => {
  const d = getDate(date)
  return `${getDateInputValue(d)}T${getTimeString(d)}`
}
