import { TimeDelta } from '../source/types'
import { timeDelta } from '../source/timeDelta/timeDelta'
import { isFuture } from '../source/timeDelta/isFuture'


describe('isFuture', () => {
  let td: TimeDelta
  beforeEach(() => {
    td = timeDelta(0, 0)
  })

  it('should return false for the same instant', () => {
    expect(isFuture(td)).toEqual(false)
  })

  it('should return false for negative total', () => {
    td = timeDelta(0, 1000)
    expect(isFuture(td)).toEqual(false)
  })

  it('should return true for for positive total', () => {
    td = timeDelta(1000, 0)
    expect(isFuture(td)).toEqual(true)
  })
})
