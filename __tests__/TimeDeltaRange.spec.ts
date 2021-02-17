import { Step } from '../source/types'
import { TimeDeltaRange } from '../source/timeDelta/TimeDeltaRange'


describe('TimeDeltaRange', () => {
  it('should return without failures', () => {
    const now = Date.now()
    const inFiveDays = Date.now() + (Step.Day * 5)
    const tdRange = new TimeDeltaRange(now, inFiveDays)
    expect(tdRange.values).toHaveLength(5)
  })

  it('should return without failures on custom steps', () => {
    const tdRange = new TimeDeltaRange(0, 5, Step.Millisecond)
    expect(tdRange.values).toHaveLength(5)
  })

  it('should artificially prevent bloated ranges and infinite loops', () => {
    const crazySizeRange = 100000000
    const tdRange = new TimeDeltaRange(0, crazySizeRange, Step.Millisecond)
    expect(tdRange.values).toHaveLength(tdRange.max)
    expect(tdRange.values.length).toBeLessThan(crazySizeRange)
  })

  it('should allow dynamic changes to range values via setters', () => {
    const tdRange = new TimeDeltaRange(0, Step.Day, Step.Hour)
    expect(tdRange.values.length).toEqual(24)
    tdRange.setEnd(Step.Day * 2)
    expect(tdRange.values.length).toEqual(48)
    tdRange.setStart(Step.Day)
    expect(tdRange.values.length).toEqual(24)
    tdRange.setInclusive(true)
    expect(tdRange.values.length).toEqual(25)
    tdRange.setInclusive(false)
    expect(tdRange.values.length).toEqual(24)
    tdRange.setStep(Step.Day)
    expect(tdRange.values.length).toEqual(1)
  })
})
