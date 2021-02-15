import { TimeDelta } from '../types'

/**
 * Determine if a timeDelta is pointed at the past
 */
export const isFuture = (delta: TimeDelta): boolean => (delta.total > 0)
