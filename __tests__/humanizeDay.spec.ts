import { Step } from '../source/types'
import { humanizeDay, humanizeUTCDay } from '../source/humanize/humanizeDay'


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
    it(`should resolve humanizeUTCDay ${ms} to ${expected}`, () => {
      expect(humanizeUTCDay(ms)).toEqual(expected)
    })
    it(`should resolve humanizeDay ${ms} to ${expected}`, () => {
      expect(humanizeDay(ms)).toEqual(humanizeDay(new Date(ms)))
    })
  })
})
