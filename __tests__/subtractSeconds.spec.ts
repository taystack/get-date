import { PossibleConstructors, Timeframe } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { subtractSeconds } from '../source/math/subtractSeconds'


type TestCase = [PossibleConstructors, number, number]

describe('subtractSeconds', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(-Timeframe.Second).getTime()],
    ['1970-01-01', 2, getDate(-Timeframe.Second * 2).getTime()],
    [new Date(0), 3, getDate(-Timeframe.Second * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(subtractSeconds(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(subtractSeconds(0).getTime()).toEqual(new Date(0).getTime())
  })
})
