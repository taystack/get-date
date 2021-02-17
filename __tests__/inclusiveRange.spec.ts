import { Step } from '../source/types'
import { inclusiveRange } from '../source/timeDelta/inclusiveRange'


describe('timeDelta inclusiveRange', () => {
  it('should return without failures', () => {
    expect(inclusiveRange(0, { from: 0 })).toEqual([0])
  })

  it('should return a range with Date.now() without failures', () => {
    expect(inclusiveRange(Date.now()).length).toEqual(1)
  })

  it('should return an inclusive inclusiveRange of dates', () => {
    expect(inclusiveRange(4, { from: 0, step: Step.Millisecond })).toEqual([0, 1, 2, 3, 4])
  })

  it('should ignore the inclusive flag', () => {
    expect(inclusiveRange(4, { from: 0, step: Step.Millisecond, inclusive: false })).toEqual([0, 1, 2, 3, 4])
  })
})
