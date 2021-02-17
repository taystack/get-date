import { Step } from '../source/types'

import { humanize } from '../source/timeDelta/humanize'
import { addSeconds, subtractSeconds } from '../source/math'


describe('timeDelta', () => {
  it('should just return "right now"', () => {
    expect(humanize(0, 0)).toEqual('right now')
  })

  it('should humanize the future', () => {
    expect(humanize(5000, 0)).toEqual('in a few seconds')
    expect(humanize(20000, 0)).toEqual('in 20 seconds')
    expect(humanize(Step.Minute * 3, 0)).toEqual('in a few minutes')
    expect(humanize(Step.Hour, 0)).toEqual('in 1 hour')
    expect(humanize(Step.Hour * 2, 0)).toEqual('in 2 hours')
    expect(humanize(Step.Day, 0)).toEqual('in 1 day')
    expect(humanize(Step.Day * 2, 0)).toEqual('in 2 days')
  })

  it('should humanize the past', () => {
    expect(humanize(0, 5000)).toEqual('a few seconds ago')
    expect(humanize(0, 20000)).toEqual('20 seconds ago')
    expect(humanize(0, Step.Minute * 3)).toEqual('a few minutes ago')
    expect(humanize(0, Step.Hour)).toEqual('1 hour ago')
    expect(humanize(0, Step.Hour * 2)).toEqual('2 hours ago')
    expect(humanize(0, Step.Day)).toEqual('1 day ago')
    expect(humanize(0, Step.Day * 2)).toEqual('2 days ago')
  })

  it('should humanize difference from now', () => {
    const now = Date.now()
    const fewSecondsAgo = subtractSeconds(now, 4)
    const fewSecondsFromNow = addSeconds(now, 4)
    expect(humanize(fewSecondsAgo)).toMatch('a few seconds ago')
    expect(humanize(fewSecondsFromNow)).toMatch('in a few seconds')
  })
})
