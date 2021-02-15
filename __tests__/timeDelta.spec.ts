import { Timeframe } from '../source/types'

import { timeDelta } from '../source/timeDelta/timeDelta'


describe('timeDelta', () => {
  it('should just return zeros', () => {
    expect(timeDelta(0, 0)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      total: 0,
    })
  })

  it('should show a positive difference to imply pointing at the future', () => {
    let total = 0
    total += Timeframe.Millisecond
    total += Timeframe.Second
    total += Timeframe.Minute
    total += Timeframe.Hour
    total += Timeframe.Day
    expect(timeDelta(total, 0)).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
      milliseconds: 1,
      total,
    })
  })

  it('should show a negative difference to imply pointing at the past', () => {
    let total = 0
    total += Timeframe.Millisecond
    total += Timeframe.Second
    total += Timeframe.Minute
    total += Timeframe.Hour
    total += Timeframe.Day
    expect(timeDelta(0, total)).toEqual({
      days: -1,
      hours: -1,
      minutes: -1,
      seconds: -1,
      milliseconds: -1,
      total: -total,
    })
    expect(timeDelta(Date.now()).seconds).toEqual(0)
  })
})
