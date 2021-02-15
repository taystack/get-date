import { PossibleConstructors } from '../source/types'

import { isEqual } from '../source/equality/isEqual'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('isEqual', () => {
  const testCases: TestCase[] = [
    [0, 0, true],
    [0, 1, false],
    [1, 0, false],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} isEqual ${to} to ${expected}`, () => {
      expect(isEqual(from, to)).toEqual(expected)
    })
  })
})
