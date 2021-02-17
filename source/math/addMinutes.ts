import { Step, PossibleConstructors } from '../types'
import { addStep } from './addStep'

/**
 * Short-hand addStep() minutes
 */
export const addMinutes = (date: PossibleConstructors, minutes = 0): Date =>
  addStep(date, Step.Minute, minutes)
