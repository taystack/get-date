import { Step, PossibleConstructors } from '../types'
import { addStep } from './addStep'

/**
 * Short-hand addStep() milliseconds
 */
export const addMilliseconds = (date: PossibleConstructors, milliseconds = 0): Date =>
  addStep(date, Step.Millisecond, milliseconds)
