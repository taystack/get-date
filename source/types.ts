import { DAY, HOUR, MINUTE, MILLISECOND, SECOND } from './constants'

export type PossibleConstructors = Date | string | number

export enum Timeframe {
  /**
   * Timeframe.Hour * 24
   */
  Day = DAY,
  /**
   * Timeframe.Minute * 60
   */
  Hour = HOUR,
  /**
   * Timeframe.Second * 60
   */
  Minute = MINUTE,
  /**
   * Timeframe.Millisecond * 1000
   */
  Second = SECOND,
  /**
   * 1
   */
  Millisecond = MILLISECOND
}

export interface TimeDelta {
  /**
   * Difference in days +- after computing higher timeframes
   */
  days: number
  /**
   * Difference in hours +- after computing higher timeframes
   */
  hours: number
  /**
   * Difference in minutes +- after computing higher timeframes
   */
  minutes: number
  /**
   * Difference in seconds +- after computing higher timeframes
   */
  seconds: number
  /**
   * Difference in milliseconds +- after computing higher timeframes
   */
  milliseconds: number
  /**
   * Total difference in milliseconds +-
   */
  total: number
}
