import { PossibleConstructors } from '../source/types'

import { gt } from '../source/equality/gt'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('Greater than - gt(l > r)', () => {
  const testCases: TestCase[] = [
    [0, 0, false],
    [0, 1, false],
    [1, 0, true],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} gt ${to} to ${expected}`, () => {
      expect(gt(from, to)).toEqual(expected)
    })
  })
})
