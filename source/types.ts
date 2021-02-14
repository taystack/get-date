import { DAY, HOUR, MINUTE, MILLISECOND, SECOND } from './constants'

export type PossibleConstructors = Date | string | number

export enum Timeframe {
  Day = DAY,
  Hour = HOUR,
  Minute = MINUTE,
  Second = SECOND,
  Millisecond = MILLISECOND
}

export interface TimeDelta {
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
  total: number
}
