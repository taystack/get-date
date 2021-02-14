import { timeDelta } from './timeDelta'
import { pluralize } from '../helpers/pluralize'
import { humanizeTimeframe } from '../humanize/humanizeTimeframe'
import { PossibleConstructors, TimeDelta, Timeframe } from '../types'


export const pluralizeTimeframe = (count: number, timeframe: Timeframe): string => {
  const timeframeText = humanizeTimeframe(timeframe)
  return pluralize(count, timeframeText)
}

export const isFuture = (delta: TimeDelta): boolean => (
  delta.days > 0 || Object.is(delta.days, +0)
)

export const isPast = (delta: TimeDelta): boolean => (
  delta.days < 0 || Object.is(delta.days, -0)
)

const validValue = (value: number): [boolean, number] => {
  const abs = Math.abs(value)
  return [abs >= 1, abs]
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
    return pluralizeTimeframe(minutes, Timeframe.Minute)
  }

  const absSeconds = Math.abs(delta.seconds)
  if (absSeconds < 10) {
    return 'a few seconds'
  }
  return pluralizeTimeframe(absSeconds, Timeframe.Second)
}

export const humanize = (
  from: PossibleConstructors,
  to: PossibleConstructors = new Date(),
): string => {
  const delta = timeDelta(from, to)
  const humanAccuracy = determineAccuracy(delta)
  if (delta.total === 0) {
    return 'right now'
  }
  if (isFuture(delta)) {
    return `${humanAccuracy} from now`
  }
  if (isPast(delta)) {
    return `${humanAccuracy} ago`
  }
  return 'CANNOT DETERMINE'
}
