import { PossibleConstructors } from '../source/types'

import { lt } from '../source/equality/lt'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('Less than - lt(l < r)', () => {
  const testCases: TestCase[] = [
    [0, 0, false],
    [0, 1, true],
    [1, 0, false],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} lt ${to} to ${expected}`, () => {
      expect(lt(from, to)).toEqual(expected)
    })
  })
})
