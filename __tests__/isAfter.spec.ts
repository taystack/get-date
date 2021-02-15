import { PossibleConstructors } from '../source/types'

import { isAfter } from '../source/equality/isAfter'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('isAfter', () => {
  const testCases: TestCase[] = [
    [0, 0, false],
    [0, 1, false],
    [1, 0, true],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} isAfter ${to} to ${expected}`, () => {
      expect(isAfter(from, to)).toEqual(expected)
    })
  })
})
