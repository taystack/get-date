import { PossibleConstructors, Timeframe } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { addDays } from '../source/math/addDays'


type TestCase = [PossibleConstructors, number, number]

describe('addDays', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(Timeframe.Day).getTime()],
    ['1970-01-01', 2, getDate(Timeframe.Day * 2).getTime()],
    [new Date(0), 3, getDate(Timeframe.Day * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(addDays(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(addDays(0).getTime()).toEqual(new Date(0).getTime())
  })
})
