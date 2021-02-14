import { Timeframe } from '../types'


export const humanizeTimeframe = (timeframe: Timeframe): string => ({
  [Timeframe.Day]: 'day',
  [Timeframe.Hour]: 'hour',
  [Timeframe.Minute]: 'minute',
  [Timeframe.Second]: 'second',
}[timeframe])
