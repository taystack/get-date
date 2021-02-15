import { PossibleConstructors } from '../source/types'

import { isBefore } from '../source/equality/isBefore'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('isBefore', () => {
  const testCases: TestCase[] = [
    [0, 0, false],
    [0, 1, true],
    [1, 0, false],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} isBefore ${to} to ${expected}`, () => {
      expect(isBefore(from, to)).toEqual(expected)
    })
  })
})
