import { PossibleConstructors } from '../source/types'

import { gte } from '../source/equality/gte'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('Greater than or equal - gte(l >= r)', () => {
  const testCases: TestCase[] = [
    [0, 0, true],
    [0, 1, false],
    [1, 0, true],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} gte ${to} to ${expected}`, () => {
      expect(gte(from, to)).toEqual(expected)
    })
  })
})
