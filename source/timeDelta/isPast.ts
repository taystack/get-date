import { TimeDelta } from '../types'

/**
 * Determine if a timeDelta is pointed at the past
 */
export const isPast = (delta: TimeDelta): boolean => (
  delta.total < 0 || Object.is(delta.total, -0)
)
