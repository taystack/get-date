import { Step, PossibleConstructors } from '../types'
import { addStep } from './addStep'

/**
 * Short-hand addStep() hours
 */
export const addHours = (date: PossibleConstructors, hours = 0): Date =>
  addStep(date, Step.Hour, hours)
