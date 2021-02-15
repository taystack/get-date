import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * short-hand for addTimeframe(date, timeframe, -count)
 */
 export const subtractTimeframe = (
   date: PossibleConstructors,
   timeframe: Timeframe = Timeframe.Day,
   count: number = 0
 ): Date => addTimeframe(date, timeframe, -count)
