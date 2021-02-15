import { difference } from '../source/timeDelta/difference'


describe('difference', () => {
  it('should return a delta with zeros', () => {
    expect(difference(0, 0)).toEqual({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      milliseconds: 0,
      total: 0,
    })
  })
})
