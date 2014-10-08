var coordinateRules = {
  N: {
    L: 'W',
    R: 'E'
  },
  E: {
    L: 'N',
    R: 'S'
  },
  S: {
    L: 'E',
    R: 'W'
  },
  W: {
    L: 'S',
    R: 'N'
  }
};

var movementRules = {
  N: [0, 1],
  S: [0, -1],
  E: [1, 0],
  W: [-1, 0]
};

var coordinateForDirection = function(coordinate, direction){
  if (coordinateRules[coordinate] === undefined) {
    throw new Error("The coordinate is invalid.");
  }

  if (coordinateRules[coordinate][direction] === undefined) {
    throw new Error("The direction is invalid.");
  }

  return coordinateRules[coordinate][direction];
};

var coordinateForMovement = function(position, coordinate){
  if (!Array.isArray(position) || position.length != 2){
    throw new Error("The position is invalid.");
  }

  if (movementRules[coordinate] === undefined){
    throw new Error("The coordinate is invalid.");
  }

  var diff = movementRules[coordinate];
  return [
    position[0] + diff[0],
    position[1] + diff[1]
  ];
};

module.exports = {
  coordinateForDirection: coordinateForDirection,
  coordinateForMovement: coordinateForMovement
};
