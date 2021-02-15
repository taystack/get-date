import { Timeframe } from '../source/types'

import { humanize } from '../source/timeDelta/humanize'


describe('timeDelta', () => {
  it('should just return "right now"', () => {
    expect(humanize(0, 0)).toEqual('right now')
  })

  it('should humanize the future', () => {
    expect(humanize(5000, 0)).toEqual('in a few seconds')
    expect(humanize(20000, 0)).toEqual('in 20 seconds')
    expect(humanize(Timeframe.Minute * 3, 0)).toEqual('in a few minutes')
    expect(humanize(Timeframe.Hour, 0)).toEqual('in 1 hour')
    expect(humanize(Timeframe.Hour * 2, 0)).toEqual('in 2 hours')
    expect(humanize(Timeframe.Day, 0)).toEqual('in 1 day')
    expect(humanize(Timeframe.Day * 2, 0)).toEqual('in 2 days')
  })

  it('should humanize the past', () => {
    expect(humanize(0, 5000)).toEqual('a few seconds ago')
    expect(humanize(0, 20000)).toEqual('20 seconds ago')
    expect(humanize(0, Timeframe.Minute * 3)).toEqual('a few minutes ago')
    expect(humanize(0, Timeframe.Hour)).toEqual('1 hour ago')
    expect(humanize(0, Timeframe.Hour * 2)).toEqual('2 hours ago')
    expect(humanize(0, Timeframe.Day)).toEqual('1 day ago')
    expect(humanize(0, Timeframe.Day * 2)).toEqual('2 days ago')
  })
})
