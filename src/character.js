var moveRules = require("./moveRules");


function Character(coordinate, cardinalDirection) {
  this.currentPosition = {
    coordinate: coordinate,
    cardinalDirection: cardinalDirection
  };
}

Character.prototype.plotMove = function(movement){
  var pos = {
    coordinate: this.currentPosition.coordinate,
    cardinalDirection: this.currentPosition.cardinalDirection
  };

  switch (movement){
    case 'M':
      pos.coordinate = moveRules.coordinateForMovement(
        pos.coordinate,
        pos.cardinalDirection
      );
      break;
    case 'L':
    case 'R':
      pos.cardinalDirection = moveRules.cardinalForDirection(
        pos.cardinalDirection,
        movement
      );
      break;
  }

  return pos;
};

Character.prototype.move = function(movement){
  this.currentPosition = this.plotMove(movement);
};

module.exports = Character;
