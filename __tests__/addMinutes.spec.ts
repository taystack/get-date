import { PossibleConstructors, Step } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { addMinutes } from '../source/math/addMinutes'


type TestCase = [PossibleConstructors, number, number]

describe('addMinutes', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(Step.Minute).getTime()],
    ['1970-01-01', 2, getDate(Step.Minute * 2).getTime()],
    [new Date(0), 3, getDate(Step.Minute * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(addMinutes(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(addMinutes(0).getTime()).toEqual(new Date(0).getTime())
  })
})
