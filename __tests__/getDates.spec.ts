import { getDates } from '../source/getters/getDates'


describe('getDates', () => {
  const dates = getDates(0, new Date(0), new Date(0).toJSON())
  dates.forEach((date) => {
    it(`should handle ${typeof date}`, () => {
      expect(date.getUTCFullYear()).toEqual(1970)
    })
  })
})
