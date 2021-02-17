import {
  getDate,
  getDates,
  getTime,
  getTimeString,
  getDateInputValue,
  getStartOfDay,
} from '../source/getters'

describe('getters', () => {
  it('should define utilities', () => {
    expect(getDate).toBeDefined()
    expect(getDates).toBeDefined()
    expect(getTime).toBeDefined()
    expect(getTimeString).toBeDefined()
    expect(getDateInputValue).toBeDefined()
    expect(getStartOfDay).toBeDefined()
  })
})
