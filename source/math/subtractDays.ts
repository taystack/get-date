import { PossibleConstructors } from '../types'
import { addDays } from './addDays'

/**
 * Short-hand subtractStep() days
 */
export const subtractDays = (date: PossibleConstructors, days: number = 0): Date => addDays(date, -days)
