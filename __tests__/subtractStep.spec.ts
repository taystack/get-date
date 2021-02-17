import { PossibleConstructors, Step } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { subtractStep } from '../source/math/subtractStep'


type TestCase = [PossibleConstructors, Step, number, number]

describe('subtractStep', () => {
  const testCases: TestCase[] = [
    [new Date(0), Step.Day, 1, getDate(-Step.Day).getTime()],
    ['1970-01-01', Step.Day, 1, getDate(-Step.Day).getTime()],
    [0, Step.Day, 1, getDate(-Step.Day).getTime()],
    [0, Step.Hour, 1, getDate(-Step.Hour).getTime()],
    [0, Step.Minute, 1, getDate(-Step.Minute).getTime()],
    [0, Step.Second, 1, getDate(-Step.Second).getTime()],
    [0, Step.Millisecond, 1, getDate(-Step.Millisecond).getTime()],
  ]
  testCases.forEach(([date, Step, count, expected]) => {
    it(`should resolve ${date} subtractStep (${count} * ${Step}ms) to ${expected}ms`, () => {
      expect(subtractStep(date, Step, count).getTime()).toEqual(expected)
    })
  })

  it('should just return with the same date', () => {
    expect(subtractStep(0).getTime()).toEqual(new Date(0).getTime())
  })
})
