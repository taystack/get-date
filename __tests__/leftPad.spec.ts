import { leftPad } from '../leftPad'
import { Num, Len, PadStartReturnValue } from '../types'

type TestCase = [Num, Len, PadStartReturnValue]

const TEST_CASES: TestCase[] = [
  [2, 2, '02'],
  [2, 3, '002'],
  [2, 1, '2'],
  [1, 4, '0001'],
  [1, undefined, '01'],
  [undefined, undefined, '01'],
  [1, 1, '1'],
  [1, -4, '1'],
]

describe('leftPad', () => {
  TEST_CASES.forEach(([lhs, rhs, expectations]: TestCase) => {
    it(`should return '${expectations}' for leftPad(${lhs}, ${rhs})`, () => {
      expect(leftPad(lhs, rhs)).toEqual(expectations)
    })
  })
})
