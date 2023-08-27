function electron(matrix) {
  matrix[0] = Array(matrix.length).fill("e");

  for (let i = 1; i < matrix.length; i++) {
    matrix[i][matrix.length - 1] = "e";
  }

  return matrix
}

module.exports = {
  electron
}
