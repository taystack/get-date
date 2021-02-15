import { PossibleConstructors, Timeframe, TimeDelta } from '../types'
import { getDates } from '../getters/getDates'
import { isBefore } from '../equality/isBefore'
import { isAfter } from '../equality/isAfter'

export const getOperatorAndTotal = (
  to: PossibleConstructors,
  from: PossibleConstructors,
): [number, number] => {
  const [toDate, fromDate] = getDates(to, from)
  let operator = 1
  if (isBefore(toDate, fromDate)) operator = -1
  if (isAfter(toDate, fromDate)) operator = +1
  const total = Math.abs(fromDate.getTime() - toDate.getTime())
  return [operator, total]
}

/**
 * @param target: PossibleConstructors target date
 * @param compare: PossibleConstructors compare date
 * @returns TimeDelta between two dates
 */
export const timeDelta = (
  to: PossibleConstructors,
  from: PossibleConstructors = Date.now()
): TimeDelta => {
  const [operator, total] = getOperatorAndTotal(to, from)
  let diff = total
  const days = Math.floor(diff / Timeframe.Day) * operator
  diff -= Math.abs(days * Timeframe.Day)
  const hours = Math.floor(diff / Timeframe.Hour) * operator
  diff -= Math.abs(hours * Timeframe.Hour)
  const minutes = Math.floor(diff / Timeframe.Minute) * operator
  diff -= Math.abs(minutes * Timeframe.Minute)
  const seconds = Math.floor(diff / Timeframe.Second) * operator
  diff -= Math.abs(seconds * Timeframe.Second)
  const milliseconds = Math.floor(diff / Timeframe.Millisecond) * operator
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    total: total * operator,
  }
}
