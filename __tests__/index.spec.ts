import * as gd from '../source'

describe('globally', () => {
  it('should have a plethora of methods', () => {
    expect(gd).toBeDefined()
    expect(gd.getDate).toBeDefined()
    expect(gd.difference).toBeDefined()
    expect(gd.range).toBeDefined()
  })
})
