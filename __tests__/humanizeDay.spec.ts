import { Timeframe } from '../source/types'

import { getDay, getUTCDay } from '../source/humanize/humanizeDay'


type TestCase = [number, string]

describe('humanizeDay', () => {
  const testCases: TestCase[] = [
    [0, "Thu"],
    [Timeframe.Day, "Fri"],
    [Timeframe.Day * 2, "Sat"],
    [Timeframe.Day * 3, "Sun"],
    [Timeframe.Day * 4, "Mon"],
    [Timeframe.Day * 5, "Tue"],
    [Timeframe.Day * 6, "Wed"],
    [Timeframe.Day * 7, "Thu"],
  ]
  testCases.forEach(([ms, expected]) => {
    it(`should resolve getUTCDay ${ms} to ${expected}`, () => {
      expect(getUTCDay(ms)).toEqual(expected)
    })
    it(`should resolve getDay ${ms} to ${expected}`, () => {
      expect(getDay(ms)).toEqual(getDay(new Date(ms)))
    })
  })
})
