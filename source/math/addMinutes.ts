import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * Short-hand addTimeframe() minutes
 */
export const addMinutes = (date: PossibleConstructors, minutes = 0): Date =>
  addTimeframe(date, Timeframe.Minute, minutes)
