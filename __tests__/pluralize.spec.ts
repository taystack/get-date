import { pluralize } from '../source/helpers/pluralize'


type TestCase = [number, string, string]

describe('pluralize', () => {
  const testCases: TestCase[] = [
    [0, 'day', '0 days'],
    [1, 'day', '1 day'],
    [2, 'day', '2 days'],
  ]
  testCases.forEach(([count, singular, plural]) => {
    it(`should pluralize ${count} ${singular} as ${plural}`, () => {
      expect(pluralize(count, singular)).toEqual(plural)
    })
  })
})
