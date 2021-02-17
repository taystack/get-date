import { PossibleConstructors } from '../source/types'
import { eq } from '../source/equality/eq'


type TestCase = [PossibleConstructors, PossibleConstructors, boolean]

describe('Equal to - eq(l == r)', () => {
  const testCases: TestCase[] = [
    [0, 0, true],
    [0, 1, false],
    [1, 0, false],
  ]
  testCases.forEach(([from, to, expected]) => {
    it(`should resolve ${from} eq ${to} to ${expected}`, () => {
      expect(eq(from, to)).toEqual(expected)
    })
  })
})
