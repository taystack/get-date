import { PossibleConstructors, Timeframe } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { subtractDays } from '../source/math/subtractDays'


type TestCase = [PossibleConstructors, number, number]

describe('subtractDays', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(-Timeframe.Day).getTime()],
    ['1970-01-01', 2, getDate(-Timeframe.Day * 2).getTime()],
    [new Date(0), 3, getDate(-Timeframe.Day * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(subtractDays(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(subtractDays(0).getTime()).toEqual(new Date(0).getTime())
  })
})
