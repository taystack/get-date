import {
  addTimeframe,
  addDays,
  addHours,
  addMinutes,
  addSeconds,
  addMilliseconds,
  subtractTimeframe,
  subtractDays,
  subtractHours,
  subtractMinutes,
  subtractSeconds,
  subtractMilliseconds,
} from '../source/math'

describe('math', () => {
  it('should define utilities', () => {
    expect(addTimeframe).toBeDefined()
    expect(addDays).toBeDefined()
    expect(addHours).toBeDefined()
    expect(addMinutes).toBeDefined()
    expect(addSeconds).toBeDefined()
    expect(addMilliseconds).toBeDefined()
    expect(subtractTimeframe).toBeDefined()
    expect(subtractDays).toBeDefined()
    expect(subtractHours).toBeDefined()
    expect(subtractMinutes).toBeDefined()
    expect(subtractSeconds).toBeDefined()
    expect(subtractMilliseconds).toBeDefined()
  })
})
