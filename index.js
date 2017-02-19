module.exports = function flatten (input) {
  if (!isArray(input)) {
    throw new TypeError('`input` must be an array')
  }

  return flattenArray(input)
}

function flattenArray (input) {
  return input.reduce((accumulator, element) => (
    isArray(element)
      ? [...accumulator, ...flattenArray(element)]
      : [...accumulator, element]
  ), [])
}

function isArray (input) {
  return input.constructor === Array
}

