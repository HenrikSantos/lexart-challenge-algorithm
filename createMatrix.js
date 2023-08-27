function createMatrix (size) {
  return Array.from({ length: size }, () => Array(size).fill("1"));
}

module.exports = {
  createMatrix
}
