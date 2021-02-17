import {
  eq,
  gt,
  gte,
  lt,
  lte,
} from '../source/equality'

describe('equality', () => {
  it('should define utilities', () => {
    expect(eq).toBeDefined()
    expect(gt).toBeDefined()
    expect(gte).toBeDefined()
    expect(lt).toBeDefined()
    expect(lte).toBeDefined()
  })
})
