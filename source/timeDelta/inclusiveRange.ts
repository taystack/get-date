import { PossibleConstructors, Timeframe } from '../types'
import { DateRange, range } from './range'

export const inclusiveRange = (
  from: PossibleConstructors,
  to: PossibleConstructors,
  timeframe: Timeframe = Timeframe.Day
): DateRange => range(from, to, timeframe, true)
