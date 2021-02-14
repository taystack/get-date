import { Timeframe, PossibleConstructors } from '../types'
import { addTimeframe } from './addTimeframe'

/**
 * @returns Date with Timeframe segments subtracted
 */
 export const subtractTimeframe = (
   date: PossibleConstructors,
   timeframe: Timeframe = Timeframe.Day,
   count: number = 0
 ): Date => addTimeframe(date, timeframe, -count)
