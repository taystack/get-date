import { getDateInputValue } from '../source/getters/getDateInputValue'


describe('getDateInputValue', () => {
  it('should return without failures', () => {
    expect(getDateInputValue(0)).toEqual('1970-01-01')
    expect(getDateInputValue(new Date(0))).toEqual('1970-01-01')
    expect(getDateInputValue(new Date(0).toUTCString())).toEqual('1970-01-01')
  })
})
