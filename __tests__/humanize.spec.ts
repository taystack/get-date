import {
  humanizeTimeframe,
  getDay,
  getMonth,
  getUTCDay,
  getUTCMonth,
} from '../source/humanize'

describe('humanize', () => {
  it('should define utilities', () => {
    expect(humanizeTimeframe).toBeDefined()
    expect(getDay).toBeDefined()
    expect(getMonth).toBeDefined()
    expect(getUTCDay).toBeDefined()
    expect(getUTCMonth).toBeDefined()
  })
})
