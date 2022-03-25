import { Unit } from '../../src'

describe('Unit', () => {
  describe('#toPx', () => {
    it('should return correct px', () => {
      expect(Math.floor(Unit.toPx(10, 'mm'))).toBe(37)
      expect(Math.floor(Unit.toPx(10, 'pt'))).toBe(13)
      expect(Math.floor(Unit.toPx(10, 'pc'))).toBe(159)
    })
  })
})