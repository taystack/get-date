import { PossibleConstructors } from '../source/types'
import { getStartOfDay } from '../source/getters/getStartOfDay'

const mockDates: PossibleConstructors[] = [100, new Date(100), new Date(100).toJSON()]

describe('getStartOfDay', () => {
  mockDates.forEach(date => {
    it(`should return without failures for ${typeof date}`, () => {
      expect(getStartOfDay(date).getTime()).toEqual(0)
      expect(getStartOfDay().getUTCDay()).toEqual(new Date().getUTCDay())
    })
  })
})
