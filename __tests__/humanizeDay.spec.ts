import { Step } from '../source/types'

import { getDay, getUTCDay } from '../source/humanize/humanizeDay'


type TestCase = [number, string]

describe('humanizeDay', () => {
  const testCases: TestCase[] = [
    [0, "Thu"],
    [Step.Day, "Fri"],
    [Step.Day * 2, "Sat"],
    [Step.Day * 3, "Sun"],
    [Step.Day * 4, "Mon"],
    [Step.Day * 5, "Tue"],
    [Step.Day * 6, "Wed"],
    [Step.Day * 7, "Thu"],
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
