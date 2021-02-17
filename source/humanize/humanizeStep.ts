import { Step } from '../types'


export const humanizeStep = (step: Step): string => ({
  [Step.Day]: 'day',
  [Step.Hour]: 'hour',
  [Step.Minute]: 'minute',
  [Step.Second]: 'second',
  [Step.Millisecond]: 'millisecond',
}[step])
