import { Step } from '../source/types'

import { humanizeDifference } from '../source/humanize/humanizeDifference'
import { addSeconds, subtractSeconds } from '../source/math'


describe('humanizeDifference', () => {
  it('should just return "right now"', () => {
    expect(humanizeDifference(0, 0)).toEqual('right now')
  })

  it('should humanizeDifference the future', () => {
    expect(humanizeDifference(5000, 0)).toEqual('in a few seconds')
    expect(humanizeDifference(20000, 0)).toEqual('in 20 seconds')
    expect(humanizeDifference(Step.Minute * 3, 0)).toEqual('in a few minutes')
    expect(humanizeDifference(Step.Hour, 0)).toEqual('in 1 hour')
    expect(humanizeDifference(Step.Hour * 2, 0)).toEqual('in 2 hours')
    expect(humanizeDifference(Step.Day, 0)).toEqual('in 1 day')
    expect(humanizeDifference(Step.Day * 2, 0)).toEqual('in 2 days')
  })

  it('should humanizeDifference the past', () => {
    expect(humanizeDifference(0, 5000)).toEqual('a few seconds ago')
    expect(humanizeDifference(0, 20000)).toEqual('20 seconds ago')
    expect(humanizeDifference(0, Step.Minute * 3)).toEqual('a few minutes ago')
    expect(humanizeDifference(0, Step.Hour)).toEqual('1 hour ago')
    expect(humanizeDifference(0, Step.Hour * 2)).toEqual('2 hours ago')
    expect(humanizeDifference(0, Step.Day)).toEqual('1 day ago')
    expect(humanizeDifference(0, Step.Day * 2)).toEqual('2 days ago')
  })

  it('should humanizeDifference difference from now', () => {
    const now = Date.now()
    const fewSecondsAgo = subtractSeconds(now, 4)
    const fewSecondsFromNow = addSeconds(now, 4)
    expect(humanizeDifference(fewSecondsAgo)).toMatch('a few seconds ago')
    expect(humanizeDifference(fewSecondsFromNow)).toMatch('in a few seconds')
  })
})
