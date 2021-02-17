import { PossibleConstructors, Step } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { subtractHours } from '../source/math/subtractHours'


type TestCase = [PossibleConstructors, number, number]

describe('subtractHours', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(-Step.Hour).getTime()],
    ['1970-01-01', 2, getDate(-Step.Hour * 2).getTime()],
    [new Date(0), 3, getDate(-Step.Hour * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(subtractHours(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(subtractHours(0).getTime()).toEqual(new Date(0).getTime())
  })
})
