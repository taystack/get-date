import { PossibleConstructors, Step, TimeDelta } from '../types'
import { difference } from '../timeDelta/difference'
import { pluralize } from '../helpers'

const threshold: Record<string, [number, number]> = {
  seconds: [90 * Step.Second, 45 * Step.Second],
  minutes: [90 * Step.Minute, 45 * Step.Minute],
  hours: [35 * Step.Hour, 22 * Step.Hour],
}

export function humanize(target: PossibleConstructors) {
  const now = Date.now()
  const delta = difference(now, target)
  const absTotal = Math.abs(delta.total)
  if (absTotal <= threshold.seconds[0]) {
    return secondAccuracy(delta, absTotal)
  }
  if (absTotal <= threshold.minutes[0]) {
    return minuteAccuracy(delta, absTotal)
  }
  if (absTotal <= threshold.hours[0]) {
    return hourAccuracy(delta, absTotal)
  }
  return dayAccuracy(delta, absTotal)
}

function secondAccuracy(delta: TimeDelta, absTotal: number): string {
  const dir = direction(delta)
  if (absTotal < threshold.seconds[1]) {
    return `a few seconds ${dir}`
  }
  return `a minute ${dir}`
}

function minuteAccuracy(delta: TimeDelta, absTotal: number): string {
  const dir = direction(delta)
  if (absTotal < threshold.minutes[1]) {
    return `${pluralize(Math.abs(delta.minutes), 'minute')} ${dir}`
  }
  return `an hour ${dir}`
}

function hourAccuracy(delta: TimeDelta, absTotal: number): string {
  const dir = direction(delta)
  if (absTotal < threshold.hours[1]) {
    return `${pluralize(Math.abs(delta.hours), 'hour')} ${dir}`
  }
  return `a day ${dir}`
}

function dayAccuracy(delta: TimeDelta, absTotal: number): string {
  const dir = direction(delta)
  return `${pluralize(Math.abs(delta.days), 'day')} ${dir}`
}

function direction(delta: TimeDelta): string {
  return delta.total < 0 ? 'from now' : 'ago'
}
