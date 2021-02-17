import { Step, PossibleConstructors } from '../types'
import { addStep } from './addStep'

/**
 * Short-hand addStep() with seconds
 */
export const addSeconds = (date: PossibleConstructors, seconds = 0): Date =>
  addStep(date, Step.Second, seconds)
