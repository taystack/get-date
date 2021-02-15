import {
  difference,
  humanize,
  isFuture,
  isPast,
  inclusiveRange,
  exclusiveRange,
  getOperatorAndTotal,
  timeDelta,
  pluralizeTimeframe,
  TimeDeltaRange,
} from '../source/timeDelta'

describe('timeDelta', () => {
  it('should define utilities', () => {
    expect(difference).toBeDefined()
    expect(humanize).toBeDefined()
    expect(isFuture).toBeDefined()
    expect(isPast).toBeDefined()
    expect(inclusiveRange).toBeDefined()
    expect(exclusiveRange).toBeDefined()
    expect(getOperatorAndTotal).toBeDefined()
    expect(timeDelta).toBeDefined()
    expect(pluralizeTimeframe).toBeDefined()
    expect(TimeDeltaRange).toBeDefined()
  })
})