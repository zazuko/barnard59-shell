/* global describe, expect, test */

const runOnceTest = require('../lib/runOnce')

describe('runOnce', () => {
  test('is a function', () => {
    expect(typeof runOnceTest).toBe('function')
  })

  test('returns a function', () => {
    const run = runOnceTest()

    expect(typeof run).toBe('function')
  })

  test('rejects if no args are given', () => {
    const run = runOnceTest()

    expect(run()).rejects.toThrow()
  })
})
