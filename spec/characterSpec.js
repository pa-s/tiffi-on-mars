var Character = require('../src/character');
var moveRules = require('../src/moveRules');

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

  describe("#move", function(){

    beforeEach(function(){
      this.character = new Character([5,1], 'N');
    });

    describe("when input is M", function(){
      it("calls moveRules#coordinateForMovement", function(){
        var spy = spyOn(moveRules, "coordinateForMovement"),
          curCoordinate = this.character.currentPosition.coordinate,
          curDirection = this.character.currentPosition.cardinalDirection;

        this.character.move('M');

        expect(spy).toHaveBeenCalledWith(curCoordinate, curDirection);
      });

      describe('When its cardinalDirection is N', function(){

        beforeEach(function(){
          this.character.currentPosition.cardinalDirection = 'N';
        });

        it("it increases its y position by 1", function(){
          var curPos = this.character.currentPosition;

          this.character.move('M');

          expect(this.character.currentPosition.coordinate[1]).toBe(2);
        });
      });

      describe('When its cardinalDirection is W', function(){

        beforeEach(function(){
          this.character.currentPosition.cardinalDirection = 'W';
        });

        it("it decreases its x position by 1", function(){
          var curPos = this.character.currentPosition;

          this.character.move('M');

          expect(this.character.currentPosition.coordinate[0]).toBe(4);
        });
      });
    });

    describe("when input is L", function(){
      it("calls moveRules#cardinalForDirection", function(){
        var spy = spyOn(moveRules, "cardinalForDirection"),
          curDirection = this.character.currentPosition.cardinalDirection,
          direction = 'L';

        this.character.move(direction);

        expect(spy).toHaveBeenCalledWith(curDirection, direction);
      });
    });

    describe("when input is R", function(){
      it("calls moveRules#cardinalForDirection", function(){
        var spy = spyOn(moveRules, "cardinalForDirection"),
          curDirection = this.character.currentPosition.cardinalDirection,
          direction = 'R';

        this.character.move(direction);

        expect(spy).toHaveBeenCalledWith(curDirection, direction);
      });
    });

    describe('When its cardinalDirection is W', function(){

      beforeEach(function(){
        this.character.currentPosition.cardinalDirection = 'W';
      });

      it("it decreases its x position by 1", function(){
        var curPos = this.character.currentPosition;

        this.character.move('M');

        expect(this.character.currentPosition.coordinate[0]).toBe(4);
      });
    });

  });
});
