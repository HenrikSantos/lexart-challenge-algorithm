function proton(matrix) {
  matrix[0] = Array(matrix.length).fill("p");

  for (let i = 1; i < matrix.length - 1; i++) {
    matrix[i][0] = "p";
    matrix[i][matrix.length - 1] = "p";
  }

  matrix[matrix.length - 1] = Array(matrix.length).fill("p");

  matrix[matrix.length - 2][matrix.length - 2] = "p";
  matrix[matrix.length - 1][matrix.length - 1] = "1";

  return matrix
}

module.exports = {
  proton
}
