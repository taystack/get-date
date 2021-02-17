import { Step, PossibleConstructors } from '../types'
import { getDate } from '../getters/getDate'

/**
 * @returns Date with count * Step segments added
 */
export const addStep = (
  date: PossibleConstructors,
  step: Step = Step.Day,
  count: number = 0
): Date => {
  let d = getDate(date)
  let ms = d.getTime() + (step * count)
  return getDate(ms)
}
