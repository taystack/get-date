import { PossibleConstructors, Step } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { addHours } from '../source/math/addHours'


type TestCase = [PossibleConstructors, number, number]

describe('addHours', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(Step.Hour).getTime()],
    ['1970-01-01', 2, getDate(Step.Hour * 2).getTime()],
    [new Date(0), 3, getDate(Step.Hour * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(addHours(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(addHours(0).getTime()).toEqual(new Date(0).getTime())
  })
})
