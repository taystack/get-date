import { timeDelta } from './timeDelta'
import { isFuture } from './isFuture'
import { pluralize } from '../helpers/pluralize'
import { humanizeStep } from '../humanize/humanizeStep'
import { PossibleConstructors, TimeDelta, Step } from '../types'


export const pluralizeStep = (count: number, Step: Step): string => {
  const StepText = humanizeStep(Step)
  return pluralize(count, StepText)
}

const validValue = (value: number): [boolean, number] => {
  const abs = Math.abs(value)
  return [abs >= 1, abs]
}

const humanizeFew = (count: number, Step: Step) => {
  if (count < 10) {
    return `a few ${humanizeStep(Step)}s`
  }
  return pluralizeStep(count, Step)
}

const determineAccuracy = (delta: TimeDelta): string => {
  const [validDays, days] = validValue(delta.days)
  if (validDays) {
    return pluralizeStep(days, Step.Day)
  }

  const [validHours, hours] = validValue(delta.hours)
  if (validHours) {
    return pluralizeStep(hours, Step.Hour)
  }

  const [validMinutes, minutes] = validValue(delta.minutes)
  if (validMinutes) {
    return humanizeFew(minutes, Step.Minute)
  }

  const absSeconds = Math.abs(delta.seconds)
  return humanizeFew(absSeconds, Step.Second)
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
