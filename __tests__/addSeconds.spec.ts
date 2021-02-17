import { PossibleConstructors, Step } from '../source/types'

import { getDate } from '../source/getters/getDate'
import { addSeconds } from '../source/math/addSeconds'


type TestCase = [PossibleConstructors, number, number]

describe('addSeconds', () => {
  const testCases: TestCase[] = [
    [0, 1, getDate(Step.Second).getTime()],
    ['1970-01-01', 2, getDate(Step.Second * 2).getTime()],
    [new Date(0), 3, getDate(Step.Second * 3).getTime()],
  ]
  testCases.forEach(([date, count, expected]) => {
    it(`should resolve add ${count} days to ${date}`, () => {
      expect(addSeconds(date, count).getTime()).toEqual(expected)
    })
  })

  it('should return the same date', () => {
    expect(addSeconds(0).getTime()).toEqual(new Date(0).getTime())
  })
})
