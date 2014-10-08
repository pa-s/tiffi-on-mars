var cardinalForDirection = require('../src/moveRules').cardinalForDirection;
var coordinateForMovement = require('../src/moveRules').coordinateForMovement;


describe("Move Rules", function() {

  describe('#cardinalForDirection', function(){
    describe("Given cardinal direction N", function(){
      var cardinalDirection = 'N';

      describe("Given direction R", function(){
        var direction = 'R';

        it("returns E", function() {
          expect(cardinalForDirection(cardinalDirection, direction)).toBe('E');
        });

      });

      describe("Given direction L", function(){
        var direction = 'L';

        it("returns W", function() {
          expect(cardinalForDirection(cardinalDirection, direction)).toBe('W');
        });

      });

    });

    describe("Given cardinal direction E", function(){
      var cardinalDirection = 'E';

      describe("Given direction R", function(){
        var direction = 'R';

        it("returns S", function() {
          expect(cardinalForDirection(cardinalDirection, direction)).toBe('S');
        });

      });

      describe("Given direction L", function(){
        var direction = 'L';

        it("returns N", function() {
          expect(cardinalForDirection(cardinalDirection, direction)).toBe('N');
        });

      });

    });

    describe("Given an invalid cardinal direction", function(){
      var cardinalDirection = 'L';

      it("throws an error", function(){
        var e = new Error("The cardinal direction is invalid.");

        expect(function() {
          cardinalForDirection(cardinalDirection, 'R');
        }).toThrow(e);

      });

    });

    describe("Given an invalid direction", function(){
      var direction = 'N';

      it("throws an error", function(){
        var e = new Error("The direction is invalid.");

        expect(function() {
          cardinalForDirection('S', direction);
        }).toThrow(e);

      });

    });
  });

  describe('#coordinateForMovement', function(){
    describe("Given an initial position of (5,9)", function(){
      var position = [5,9];

      describe("Given cardinal direction N", function(){
        var cardinalDirection = 'N';

        it("returns (5,10)", function(){
          expect(coordinateForMovement(position, cardinalDirection)).toEqual([5,10]);
        });
      });
    });

    describe("Given an invalid coordinate", function(){
      describe("of wrong type", function(){
        var coordinate = '5,9';

        it("throws an error", function(){
          var e = new Error("The coordinate is invalid.");

          expect(function() {
            coordinateForMovement(coordinate, 'N');
          }).toThrow(e);

        });
      });

      describe("of wrong length", function(){
        var coordinate1 = [1];
        var coordinate2 = [1,2,3];
        var coordinate3 = [];

        it("throws an error", function(){
          var e = new Error("The coordinate is invalid.");

          expect(function() {
            coordinateForMovement(coordinate1, 'N');
          }).toThrow(e);

          expect(function() {
            coordinateForMovement(coordinate2, 'N');
          }).toThrow(e);

          expect(function() {
            coordinateForMovement(coordinate3, 'N');
          }).toThrow(e);

        });
      });
    });

    describe("Given an invalid cardinal direction", function(){
      var position = [5,9];
      var cardinalDirection = 'L';

      it("throws an error", function(){
        var e = new Error("The cardinal direction is invalid.");

        expect(function() {
          coordinateForMovement(position, cardinalDirection);
        }).toThrow(e);

      });
    });

  });
});
