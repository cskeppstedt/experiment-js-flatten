module.exports = function flatten (input) {
  if (!isArray(input)) {
    throw new TypeError('`input` must be an array')
  }

  return flattenArray(input)
}

function flattenArray (input) {
  return input.reduce((accumulator, element) => (
    isArray(element)
      ? accumulator.concat(flattenArray(element))
      : accumulator.concat(element)
  ), [])
}

function isArray (input) {
  return input.constructor === Array
}

