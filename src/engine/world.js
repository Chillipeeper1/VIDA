// Matrix generation: 20 x 20
// This will set the base of the entire world

const rows = 20;
const columns = 20;
const positions = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function createWorld() {
  let world = getBlankMatrix();
  randomEntities(world);
  return world;
}

function getBlankMatrix() {
  let worldMatrix = Array.from({ length: rows }, () =>
    Array.from({ length: columns }).fill(0),
  );
  return worldMatrix;
}

function randomEntities(matrix) {
  let entities = 10;
  while (entities > 0) {
    let randomPlace1 = Math.floor(Math.random() * 20);
    let randomPlace2 = Math.floor(Math.random() * 20);
    if (matrix[randomPlace1][randomPlace2] != 1) {
      matrix[randomPlace1][randomPlace2] = 1;
    }

    entities -= 1;
  }
  console.table(matrix);
  return matrix;
}

function updateWorld(matrix) {
  let new_matrix = getBlankMatrix();
  let moved = false;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == 1) {
        for (const [x, y] of positions) {
          let neighborX = i + x;
          let neighborY = j + y;
          if (
            neighborX >= 0 &&
            neighborX < matrix.length &&
            neighborY >= 0 &&
            neighborY < matrix[i].length
          ) {
            if (matrix[neighborX][neighborY] == 0) {
              new_matrix[neighborX][neighborY] = 1;
              moved = true;
              break;
            }
          }
        }
        if (moved == false) {
          new_matrix[i][j] = 1;
        }
      }
    }
  }
  console.table(new_matrix);
  return new_matrix;
}

let world = createWorld();
world = updateWorld(world);
world = updateWorld(world);
world = updateWorld(world);
