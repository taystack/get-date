import { humanizeUTCMonth, humanizeMonth } from '../source/humanize/humanizeMonth'


type TestCase = [string, string]

describe('humanizeMonth', () => {
  const testCases: TestCase[] = [
    ['2020-01-01', "Jan"],
    ['2020-02-02', "Feb"],
    ['2020-03-03', "Mar"],
    ['2020-04-04', "Apr"],
    ['2020-05-05', "May"],
    ['2020-06-06', "Jun"],
    ['2020-07-07', "Jul"],
    ['2020-08-08', "Aug"],
    ['2020-09-09', "Sep"],
    ['2020-10-10', "Oct"],
    ['2020-11-11', "Nov"],
    ['2020-12-12', "Dec"],
  ]
  testCases.forEach(([date, expected]) => {
    it(`should resolve humanizeUTCMonth ${date} to ${expected}`, () => {
      expect(humanizeUTCMonth(date)).toEqual(expected)
    })

    it(`should resolve humanizeMonth ${date} to ${expected}`, () => {
      expect(humanizeMonth(date)).toEqual(humanizeMonth(new Date(date)))
    })
  })
})
