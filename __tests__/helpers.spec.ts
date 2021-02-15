import {
  leftPad,
  pluralize,
} from '../source/helpers'

describe('helpers', () => {
  it('should define utilities', () => {
    expect(leftPad).toBeDefined()
    expect(pluralize).toBeDefined()
  })
})
