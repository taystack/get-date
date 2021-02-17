import { Step, PossibleConstructors } from '../types'
import { addStep } from './addStep'

/**
 * short-hand for addStep(date, Step, -count)
 */
 export const subtractStep = (
   date: PossibleConstructors,
   step: Step = Step.Day,
   count: number = 0
 ): Date => addStep(date, step, -count)
