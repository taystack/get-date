/**
 * Accuracy identity
 */
export const MILLISECOND = 1
/**
 * MILLISECOND * 1000
 */
export const SECOND = MILLISECOND * 1000
/**
 * SECOND * 60
 */
export const MINUTE = SECOND * 60
/**
 * MINUTE * 60
 */
export const HOUR = MINUTE * 60
/**
 * HOUR * 24
 */
export const DAY = HOUR * 24

/**
 * List of abbreviations for the names of days
 */
export const DAY_NAMES = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
/**
 * List of abbreviations for the names of months
 */
export const MONTH_NAMES = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]


/**
 * Normalizing Date creation by allowing Date to be returned if passed.
 */
export type PossibleConstructors = Date | string | number

/**
 * Dates are stored as numbers in milliseconds since Jan 1, 1970 00:00:00.000
 */
export type DateRange = number[]

/**
 * Temporal segments of time
 */
export enum Step {
  /**
   * Step.Hour * 24
   */
  Day = DAY,
  /**
   * Step.Minute * 60
   */
  Hour = HOUR,
  /**
   * Step.Second * 60
   */
  Minute = MINUTE,
  /**
   * Step.Millisecond * 1000
   */
  Second = SECOND,
  /**
   * 1
   */
  Millisecond = MILLISECOND
}

export interface TimeDelta {
  /**
   * Difference in days +- after computing higher Steps
   */
  days: number
  /**
   * Difference in hours +- after computing higher Steps
   */
  hours: number
  /**
   * Difference in minutes +- after computing higher Steps
   */
  minutes: number
  /**
   * Difference in seconds +- after computing higher Steps
   */
  seconds: number
  /**
   * Difference in milliseconds +- after computing higher Steps
   */
  milliseconds: number
  /**
   * Total difference in milliseconds +-
   */
  total: number
}
