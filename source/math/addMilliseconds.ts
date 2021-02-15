import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * Short-hand addTimeframe() milliseconds
 */
export const addMilliseconds = (date: PossibleConstructors, milliseconds = 0): Date =>
  addTimeframe(date, Timeframe.Millisecond, milliseconds)
