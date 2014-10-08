var rules = {
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

module.exports = function(coordinate, direction){
  if (rules[coordinate] === undefined) {
    throw new Error("The coordinate is invalid.");
  }

  if (rules[coordinate][direction] === undefined) {
    throw new Error("The direction is invalid.");
  }

  return rules[coordinate][direction];
}
