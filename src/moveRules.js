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
}

var coordinateForDirection = function(coordinate, direction){
  if (coordinateRules[coordinate] === undefined) {
    throw new Error("The coordinate is invalid.");
  }

  if (coordinateRules[coordinate][direction] === undefined) {
    throw new Error("The direction is invalid.");
  }

  return coordinateRules[coordinate][direction];
}


module.exports = {
  coordinateForDirection: coordinateForDirection
};
