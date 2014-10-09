var rules = require("./config")

var cardinalForDirection = function(cardinalDirection, direction){
  var rule = rules.cardinalDirectionRules[cardinalDirection];

  if (rule === undefined) {
    throw new Error("The cardinal direction is invalid.");
  }

  if (rule[direction] === undefined) {
    throw new Error("The direction is invalid.");
  }

  return rule[direction];
};

var coordinateForMovement = function(coordinate, cardinalDirection){
  if (!Array.isArray(coordinate) || coordinate.length !== 2){
    throw new Error("The coordinate is invalid.");
  }

  var diff = rules.movementRules[cardinalDirection];

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
