import { Step } from '../source/types'

import { humanizeStep } from '../source/humanize/humanizeStep'


type TestCase = [Step, string]

describe('humanizeStep', () => {
  const testCases: TestCase[] = [
    [Step.Day, 'day'],
    [Step.Hour, 'hour'],
    [Step.Minute, 'minute'],
    [Step.Second, 'second'],
    [Step.Millisecond, 'millisecond'],
  ]
  testCases.forEach(([Step, expected]) => {
    it(`should resolve humanizeStep from ${Step} to ${expected}`, () => {
      expect(humanizeStep(Step)).toEqual(expected)
    })
  })
})
