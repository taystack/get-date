import {
  difference,
  exclusiveRange,
  inclusiveRange,
  range,
} from '../source/timeDelta'

describe('timeDelta', () => {
  it('should define utilities', () => {
    expect(difference).toBeDefined()
    expect(inclusiveRange).toBeDefined()
    expect(exclusiveRange).toBeDefined()
    expect(range).toBeDefined()
  })
})
