const { electron } = require("./electron.js");
const { proton } = require("./proton.js");
const { neutron } = require("./neutron.js");
const { createMatrix } = require("./createMatrix.js");

function cyclotron(particle, matrix) {

  if (matrix.length < 4) return;

  const filledMatrix = createMatrix(matrix.length)

  if (!particle) return filledMatrix;

  if (particle === "e") return electron(filledMatrix);
  
  if (particle === "p") return proton(filledMatrix);
  
  if (particle === "n") return neutron(filledMatrix);
}

console.log(cyclotron("", createMatrix(4))) // [ [ '1', '1', '1', '1' ],  [ '1', '1', '1', '1' ],  [ '1', '1', '1', '1' ],  [ '1', '1', '1', '1' ] ]
console.log(cyclotron("e", createMatrix(4))) // [ [ 'e', 'e', 'e', 'e' ], [ '1', '1', '1', 'e' ], [ '1', '1', '1', 'e' ], [ '1', '1', '1', 'e' ] ]
console.log(cyclotron("p", createMatrix(4))) // [ [ 'p', 'p', 'p', 'p' ], [ 'p', '1', '1', 'p' ], [ 'p', '1', 'p', 'p' ], [ 'p', 'p', 'p', '1' ] ]
console.log(cyclotron("p", createMatrix(6))) // [ [ 'p', 'p', 'p', 'p', 'p', 'p' ], [ 'p', '1', '1', '1', '1', 'p' ], [ 'p', '1', '1', '1', '1', 'p' ],  [ 'p', '1', '1', '1', '1', 'p' ],  [ 'p', '1', '1', '1', 'p', 'p' ],  [ 'p', 'p', 'p', 'p', 'p', '1' ]]
console.log(cyclotron("n", createMatrix(4))) // [ [ 'n', 'n', 'n', 'n' ], [ '1', '1', '1', '1' ], [ '1', '1', '1', '1' ], [ '1', '1', '1', '1' ] ]

module.exports = {
  cyclotron
};