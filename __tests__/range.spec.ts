import { Step } from '../source/types'
import { range, RangeConfig } from '../source/timeDelta/range'


describe('timeDelta range', () => {
  it('should return without failures', () => {
    expect(range(0, { from: 0 })).toEqual([])
  })

  it('should return an exclusive range of dates', () => {
    const config: RangeConfig = { step: Step.Millisecond, from: 0 }
    expect(range(4, config)).toEqual([0, 1, 2, 3])
  })

  it('should return an inclusive range of dates', () => {
    const config: RangeConfig = { step: Step.Millisecond, from: 0, inclusive: true }
    expect(range(4, config)).toEqual([0, 1, 2, 3, 4])
  })

  it('should range 2 days', () => {
    const twoDayRange = Date.now() + Step.Day
    expect(range(twoDayRange).length).toEqual(2)
  })
})
