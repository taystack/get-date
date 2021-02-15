import { PossibleConstructors } from '../types'
import { addSeconds } from './addSeconds'

/**
 * Short-hand subtractTimeframe() seconds
 */
export const subtractSeconds = (date: PossibleConstructors, seconds: number = 0): Date => addSeconds(date, -seconds)
