import { Timeframe } from '../source/types'

import { humanizeTimeframe } from '../source/humanize/humanizeTimeframe'


type TestCase = [Timeframe, string]

describe('humanizeTimeframe', () => {
  const testCases: TestCase[] = [
    [Timeframe.Day, 'day'],
    [Timeframe.Hour, 'hour'],
    [Timeframe.Minute, 'minute'],
    [Timeframe.Second, 'second'],
    [Timeframe.Millisecond, 'millisecond'],
  ]
  testCases.forEach(([timeframe, expected]) => {
    it(`should resolve humanizeTimeframe from ${timeframe} to ${expected}`, () => {
      expect(humanizeTimeframe(timeframe)).toEqual(expected)
    })
  })
})
