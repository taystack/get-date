import { getTime } from '../source/getters/getTime'


describe('getTime', () => {
  const dates = [0, new Date(0), new Date(0).toJSON()]
  dates.forEach((date) => {
    it(`should handle ${typeof date}`, () => {
      expect(getTime(date)).toEqual(0)
    })
  })
})
