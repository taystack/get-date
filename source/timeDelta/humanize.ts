import { timeDelta } from './timeDelta'
import { isFuture } from './isFuture'
import { pluralize } from '../helpers/pluralize'
import { humanizeTimeframe } from '../humanize/humanizeTimeframe'
import { PossibleConstructors, TimeDelta, Timeframe } from '../types'


export const pluralizeTimeframe = (count: number, timeframe: Timeframe): string => {
  const timeframeText = humanizeTimeframe(timeframe)
  return pluralize(count, timeframeText)
}

const validValue = (value: number): [boolean, number] => {
  const abs = Math.abs(value)
  return [abs >= 1, abs]
}

const humanizeFew = (count: number, timeframe: Timeframe) => {
  if (count < 10) {
    return `a few ${humanizeTimeframe(timeframe)}s`
  }
  return pluralizeTimeframe(count, timeframe)
}

const determineAccuracy = (delta: TimeDelta): string => {
  const [validDays, days] = validValue(delta.days)
  if (validDays) {
    return pluralizeTimeframe(days, Timeframe.Day)
  }

  const [validHours, hours] = validValue(delta.hours)
  if (validHours) {
    return pluralizeTimeframe(hours, Timeframe.Hour)
  }

  const [validMinutes, minutes] = validValue(delta.minutes)
  if (validMinutes) {
    return humanizeFew(minutes, Timeframe.Minute)
  }

  const absSeconds = Math.abs(delta.seconds)
  return humanizeFew(absSeconds, Timeframe.Second)
}

/**
 * Humanize a date with respect to another.
 * @param to: target datetime
 * @param from (optional) - defaults to Date.now()
 */
export const humanize = (
  to: PossibleConstructors,
  from: PossibleConstructors = Date.now(),
): string => {
  const delta = timeDelta(to, from)
  const humanAccuracy = determineAccuracy(delta)
  if (delta.total === 0) {
    return 'right now'
  }
  if (isFuture(delta)) {
    return `in ${humanAccuracy}`
  }
  return `${humanAccuracy} ago`
}
