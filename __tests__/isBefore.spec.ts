import { PossibleConstructors } from '../../types'
import { isBefore } from '../isBefore'


type DateFrom = PossibleConstructors
type DateTo = PossibleConstructors
type Expected = boolean
type TestCase = [DateFrom, DateTo, Expected]

const testCases: TestCase[] = [
  ['2021-01-01', '2021-01-05', true],
  [1609459200000, 1609804800000, true],
  [new Date('2021-01-01'), new Date('2021-01-05'), true],

  ['2021-01-10', '2021-01-05', false],
  [new Date('2021-01-10'), new Date('2021-01-05'), false],
  [1610236800000, 1609804800000, false],

  ['2021-01-05', '2021-01-05', false],
  [new Date('2021-01-05'), new Date('2021-01-05'), false],
  [1609804800000, 1609804800000, false],
]

describe('isBefore', () => {
  testCases.forEach(([d1, d2, expected]: TestCase) => {
    it(`should return ${expected} for ${d1} isBefore ${d2}`, () => {
      expect(isBefore(d1, d2)).toEqual(expected)
    })
  })
})
