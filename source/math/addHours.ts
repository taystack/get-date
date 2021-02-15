import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * Short-hand addTimeframe() hours
 */
export const addHours = (date: PossibleConstructors, hours = 0): Date =>
  addTimeframe(date, Timeframe.Hour, hours)
