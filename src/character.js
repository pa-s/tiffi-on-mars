
function Character(coordinate, cardinalDirection) {
  this.currentPosition = {
    coordinate: coordinate,
    cardinalDirection: cardinalDirection
  };
};

module.exports = Character;
