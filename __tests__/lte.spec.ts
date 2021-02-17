import { PossibleConstructors } from '../source/types'

import { lte } from '../source/equality/lte'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('Less than or equal - lte(l <= r)', () => {
  const testCases: TestCase[] = [
    [0, 0, true],
    [0, 1, true],
    [1, 0, false],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} lte ${to} to ${expected}`, () => {
      expect(lte(from, to)).toEqual(expected)
    })
  })
})
