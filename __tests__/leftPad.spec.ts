import { leftPad } from '../source/helpers/leftPad'

describe('leftPad', () => {
  it('should return without failures', () => {
    expect(leftPad()).toEqual('01')
    expect(leftPad(3)).toEqual('03')
    expect(leftPad(3, 3)).toEqual('003')
  })
})
