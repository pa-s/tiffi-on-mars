var cardinalDirectionRules = {
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

var cardinalForDirection = function(cardinalDirection, direction){
  if (cardinalDirectionRules[cardinalDirection] === undefined) {
    throw new Error("The cardinal direction is invalid.");
  }

  if (cardinalDirectionRules[cardinalDirection][direction] === undefined) {
    throw new Error("The direction is invalid.");
  }

  return cardinalDirectionRules[cardinalDirection][direction];
};

var coordinateForMovement = function(coordinate, cardinalDirection){
  if (!Array.isArray(coordinate) || coordinate.length != 2){
    throw new Error("The coordinate is invalid.");
  }

  var diff = movementRules[cardinalDirection];

  if (diff === undefined){
    throw new Error("The cardinal direction is invalid.");
  }

  return [
    coordinate[0] + diff[0],
    coordinate[1] + diff[1]
  ];
};

module.exports = {
  cardinalForDirection: cardinalForDirection,
  coordinateForMovement: coordinateForMovement
};
