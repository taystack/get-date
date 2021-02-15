import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * Short-hand addTimeframe() with seconds
 */
export const addSeconds = (date: PossibleConstructors, seconds = 0): Date =>
  addTimeframe(date, Timeframe.Second, seconds)
