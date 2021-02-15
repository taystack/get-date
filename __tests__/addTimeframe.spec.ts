import { PossibleConstructors, Timeframe } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { addTimeframe } from '../source/math/addTimeframe'


type TestCase = [PossibleConstructors, Timeframe, number, number]

describe('addTimeframe', () => {
  const testCases: TestCase[] = [
    [new Date(0), Timeframe.Day, 1, getDate(Timeframe.Day).getTime()],
    ['1970-01-01', Timeframe.Day, 1, getDate(Timeframe.Day).getTime()],
    [0, Timeframe.Day, 1, getDate(Timeframe.Day).getTime()],
    [0, Timeframe.Hour, 1, getDate(Timeframe.Hour).getTime()],
    [0, Timeframe.Minute, 1, getDate(Timeframe.Minute).getTime()],
    [0, Timeframe.Second, 1, getDate(Timeframe.Second).getTime()],
    [0, Timeframe.Millisecond, 1, getDate(Timeframe.Millisecond).getTime()],
  ]
  testCases.forEach(([date, timeframe, count, expected]) => {
    it(`should resolve ${date} addTimeframe (${count} * ${timeframe}ms) to ${expected}ms`, () => {
      expect(addTimeframe(date, timeframe, count).getTime()).toEqual(expected)
    })
  })

  it('should just return with the same date', () => {
    expect(addTimeframe(0).getTime()).toEqual(new Date(0).getTime())
  })
})
