import { getTimeString } from '../source/getters/getTimeString'


describe('getTimeString', () => {
  const dates = [0, new Date(0), new Date(0).toJSON()]
  dates.forEach((date) => {
    it(`should handle ${typeof date}`, () => {
      expect(getTimeString(date)).toEqual('00:00:00.000')
    })
  })
})
