import { PossibleConstructors } from '../types'
import { addMilliseconds } from './addMilliseconds'

/**
 * Short-hand subtractStep() milliseconds
 */
export const subtractMilliseconds = (date: PossibleConstructors, milliseconds: number = 0): Date => addMilliseconds(date, -milliseconds)
