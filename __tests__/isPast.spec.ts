import { TimeDelta } from '../source/types'
import { timeDelta } from '../source/timeDelta/timeDelta'
import { isPast } from '../source/timeDelta/isPast'


describe('isPast', () => {
  let td: TimeDelta
  beforeEach(() => {
    td = timeDelta(0, 0)
  })

  it('should return false for the same instant', () => {
    expect(isPast(td)).toEqual(false)
  })

  it('should return true for negative total', () => {
    td = timeDelta(0, 1000)
    expect(isPast(td)).toEqual(true)
  })

  it('should return false for for positive total', () => {
    td = timeDelta(1000, 0)
    expect(isPast(td)).toEqual(false)
  })
})
