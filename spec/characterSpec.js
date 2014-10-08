var Character = require('../src/character');

describe("Character", function(){
  describe ("constructor", function(){
    it ("stores the given position as its currentPosition", function(){
      var coordinate = [3,2],
        cardinalDirection = 'S',
        character = new Character(coordinate, cardinalDirection);

      expect(character.currentPosition).toEqual({
        coordinate: coordinate,
        cardinalDirection: cardinalDirection
      });
    });
  });
});
