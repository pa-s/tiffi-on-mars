var moveRules = require("./moveRules");


function Character(coordinate, cardinalDirection) {
  this.currentPosition = {
    coordinate: coordinate,
    cardinalDirection: cardinalDirection
  };
}

Character.prototype.move = function(movement){
    switch (movement){
      case 'M':
        this.currentPosition.coordinate = moveRules.coordinateForMovement(
          this.currentPosition.coordinate,
          this.currentPosition.cardinalDirection
        );
        break;
      case 'L':
      case 'R':
        this.currentPosition.cardinalDirection = moveRules.cardinalForDirection(
          this.currentPosition.cardinalDirection,
          movement
        );
        break;
    }
};

module.exports = Character;
