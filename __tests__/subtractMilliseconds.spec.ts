import { PossibleConstructors, Timeframe } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { subtractMilliseconds } from '../source/math/subtractMilliseconds'


type TestCase = [PossibleConstructors, number, number]

describe('subtractMilliseconds', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(-Timeframe.Millisecond).getTime()],
    ['1970-01-01', 2, getDate(-Timeframe.Millisecond * 2).getTime()],
    [new Date(0), 3, getDate(-Timeframe.Millisecond * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(subtractMilliseconds(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(subtractMilliseconds(0).getTime()).toEqual(new Date(0).getTime())
  })
})
