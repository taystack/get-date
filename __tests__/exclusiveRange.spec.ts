import { Step } from '../source/types'
import { exclusiveRange } from '../source/timeDelta/exclusiveRange'


describe('timeDelta exclusiveRange', () => {
  it('should return without failures', () => {
    expect(exclusiveRange(Date.now())).toHaveLength(1)
  })

  it('should return a range with Date.now() without failures', () => {
    const now = Date.now()
    expect(exclusiveRange(now, { from: now - 1 })).toHaveLength(1)
  })

  it('should return an inclusive exclusiveRange of dates', () => {
    expect(exclusiveRange(4, { from: 0, step: Step.Millisecond })).toEqual([0, 1, 2, 3])
  })

  it('should ignore the inclusive flag', () => {
    expect(exclusiveRange(4, { from: 0, step: Step.Millisecond, inclusive: true })).toEqual([0, 1, 2, 3])
    })
})
