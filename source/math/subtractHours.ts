import { PossibleConstructors } from '../types'
import { addHours } from './addHours'

/**
 * Short-hand subtractTimeframe() hours
 */
export const subtractHours = (date: PossibleConstructors, hours: number = 0): Date => addHours(date, -hours)
