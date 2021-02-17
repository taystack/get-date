import {
  humanizeStep,
  humanizeDay,
  humanizeUTCDay,
  humanizeMonth,
  humanizeUTCMonth,
} from '../source/humanize'

describe('humanize', () => {
  it('should define utilities', () => {
    expect(humanizeStep).toBeDefined()
    expect(humanizeDay).toBeDefined()
    expect(humanizeUTCDay).toBeDefined()
    expect(humanizeMonth).toBeDefined()
    expect(humanizeUTCMonth).toBeDefined()
  })
})
