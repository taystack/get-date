import { getDate } from '../source/getters/getDate'


describe('getDate', () => {
  it('should return without failures', () => {
    expect(getDate(0).getTime()).toEqual(0)
    expect(getDate(0).getUTCFullYear()).toEqual(1970)
    expect(getDate(new Date(0)).getUTCFullYear()).toEqual(1970)
    expect(getDate(new Date(0).toJSON()).getUTCFullYear()).toEqual(1970)
    const getter = getDate()
    const date = new Date()
    expect(getter.getUTCDay()).toEqual(date.getUTCDay())
    expect(getter.getUTCFullYear()).toEqual(date.getUTCFullYear())
    expect(getter.getHours()).toEqual(date.getHours())
  })
})
