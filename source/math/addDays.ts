import { Step, PossibleConstructors } from '../types'
import { addStep } from './addStep'

/**
 * @param days: number of day segments to add
 * @returns new MathDate()
 */
export const addDays = (
  date: PossibleConstructors,
  days: number = 0
): Date => addStep(date, Step.Day, days)
