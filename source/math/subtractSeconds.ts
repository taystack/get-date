import { PossibleConstructors } from '../types'
import { addSeconds } from './addSeconds'

/**
 * Short-hand subtractStep() seconds
 */
export const subtractSeconds = (date: PossibleConstructors, seconds: number = 0): Date => addSeconds(date, -seconds)
