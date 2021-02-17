import { PossibleConstructors, Step, TimeDelta } from '../types'
import { getDates } from '../getters/getDates'
import { lt, gt } from '../equality'

export const getOperatorAndTotal = (
  to: PossibleConstructors,
  from: PossibleConstructors,
): [number, number] => {
  const [toDate, fromDate] = getDates(to, from)
  let operator = 1
  if (lt(toDate, fromDate)) operator = -1
  if (gt(toDate, fromDate)) operator = +1
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
  const days = Math.floor(diff / Step.Day) * operator
  diff -= Math.abs(days * Step.Day)
  const hours = Math.floor(diff / Step.Hour) * operator
  diff -= Math.abs(hours * Step.Hour)
  const minutes = Math.floor(diff / Step.Minute) * operator
  diff -= Math.abs(minutes * Step.Minute)
  const seconds = Math.floor(diff / Step.Second) * operator
  diff -= Math.abs(seconds * Step.Second)
  const milliseconds = Math.floor(diff / Step.Millisecond) * operator
  return {
    days,
    hours,
    minutes,
    seconds,
    milliseconds,
    total: total * operator,
  }
}
