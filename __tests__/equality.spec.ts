import {
  isAfter,
  isBefore,
  isEqual,
} from '../source/equality'

describe('equality', () => {
  it('should define utilities', () => {
    expect(isAfter).toBeDefined()
    expect(isBefore).toBeDefined()
    expect(isEqual).toBeDefined()
  })
})
