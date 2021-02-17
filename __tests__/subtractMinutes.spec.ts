import { PossibleConstructors, Step } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { subtractMinutes } from '../source/math/subtractMinutes'


type TestCase = [PossibleConstructors, number, number]

describe('subtractMinutes', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(-Step.Minute).getTime()],
    ['1970-01-01', 2, getDate(-Step.Minute * 2).getTime()],
    [new Date(0), 3, getDate(-Step.Minute * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(subtractMinutes(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(subtractMinutes(0).getTime()).toEqual(new Date(0).getTime())
  })
})
