import { PossibleConstructors } from '../types'
import { leftPad } from '../helpers'
import { getDate } from './getDate'

/**
 * @get time: string hh:mm:ss.SSS
 */
export const getTimeString = (date: PossibleConstructors): string => {
  const d = getDate(date)
  const hours = leftPad(d.getUTCHours())
  const minutes = leftPad(d.getUTCMinutes())
  const seconds = leftPad(d.getUTCSeconds())
  const milliseconds = leftPad(d.getUTCMilliseconds(), 3)
  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}
