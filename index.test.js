const flatten = require('./')

test('throws on invalid input', () => {
  const invalidInput = [undefined, null, 3, '3', {}, false, true]
  invalidInput.forEach((input) => {
    expect(() => flatten(input)).toThrow(TypeError)
  })
})

test('handles empty array', () => {
  const input = []
  const expected = []
  expect(flatten(input)).toEqual(expected)
})

test('handles single item array', () => {
  const input = [1]
  const expected = [1]
  expect(flatten(input)).toEqual(expected)
})

test('handles multiple item array', () => {
  const input = [1, 2, 3]
  const expected = [1, 2, 3]
  expect(flatten(input)).toEqual(expected)
})

test('handles single level nesting', () => {
  const input = [1, [2, 3], 4]
  const expected = [1, 2, 3, 4]
  expect(flatten(input)).toEqual(expected)
})

test('handles multiple level nesting', () => {
  const input = [1, [2, [3, 4]], 5]
  const expected = [1, 2, 3, 4, 5]
  expect(flatten(input)).toEqual(expected)
})

