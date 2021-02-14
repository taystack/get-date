import { PossibleConstructors } from '../types'
import { leftPad } from '../helpers'
import { getDate } from './getDate'

/**
 * @get time: string hh:mm:ss.SSS
 */
export const getTimeString = (date: PossibleConstructors): string => {
  const d = getDate(date)
  const hours = leftPad(d.getHours())
  const minutes = leftPad(d.getMinutes())
  const seconds = leftPad(d.getSeconds())
  const milliseconds = leftPad(d.getMilliseconds(), 3)
  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}
