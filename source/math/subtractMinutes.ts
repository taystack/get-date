import { PossibleConstructors } from '../types'
import { addMinutes } from './addMinutes'

/**
 * Short-hand subtractStep() minutes
 */
export const subtractMinutes = (date: PossibleConstructors, minutes: number = 0): Date => addMinutes(date, -minutes)
