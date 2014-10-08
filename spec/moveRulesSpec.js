var coordinateForDirection = require('../src/moveRules').coordinateForDirection;
var coordinateForMovement = require('../src/moveRules').coordinateForMovement;


describe("Move Rules", function() {

  describe('#coordinateForDirection', function(){
    describe("Given coordinate N", function(){
      var coordinate = 'N';

      describe("Given direction R", function(){
        var direction = 'R';

        it("returns E", function() {
          expect(coordinateForDirection(coordinate, direction)).toBe('E');
        });

      });

      describe("Given direction L", function(){
        var direction = 'L';

        it("returns W", function() {
          expect(coordinateForDirection(coordinate, direction)).toBe('W');
        });

      });

    });

    describe("Given coordinate E", function(){
      var coordinate = 'E';

      describe("Given direction R", function(){
        var direction = 'R';

        it("returns S", function() {
          expect(coordinateForDirection(coordinate, direction)).toBe('S');
        });

      });

      describe("Given direction L", function(){
        var direction = 'L';

        it("returns N", function() {
          expect(coordinateForDirection(coordinate, direction)).toBe('N');
        });

      });

    });

    describe("Given an invalid coordinate", function(){
      var coordinate = 'L';

      it("throws an error", function(){
        var e = new Error("The coordinate is invalid.");

        expect(function() {
          coordinateForDirection(coordinate, 'R');
        }).toThrow(e);

      });

    });

    describe("Given an invalid direction", function(){
      var direction = 'N';

      it("throws an error", function(){
        var e = new Error("The direction is invalid.");

        expect(function() {
          coordinateForDirection('S', direction);
        }).toThrow(e);

      });

    });
  });

  describe('#coordinateForMovement', function(){
    describe("Given an initial position of (5,9)", function(){
      var position = [5,9];

      describe("Given coordinate N", function(){
        var coordinate = 'N';

        it("returns (5,10)", function(){
          expect(coordinateForMovement(position, coordinate)).toEqual([5,10]);
        });
      });
    });

    describe("Given an invalid position", function(){
      describe("of wrong type", function(){
        var position = '5,9';

        it("throws an error", function(){
          var e = new Error("The position is invalid.");

          expect(function() {
            coordinateForMovement(position, 'N');
          }).toThrow(e);

        });
      });

      describe("of wrong length", function(){
        var position1 = [1];
        var position2 = [1,2,3];
        var position3 = [];

        it("throws an error", function(){
          var e = new Error("The position is invalid.");

          expect(function() {
            coordinateForMovement(position1, 'N');
          }).toThrow(e);

          expect(function() {
            coordinateForMovement(position2, 'N');
          }).toThrow(e);

          expect(function() {
            coordinateForMovement(position3, 'N');
          }).toThrow(e);

        });
      });
    });

    describe("Given an invalid coordinate", function(){
      var position = [5,9];
      var coordinate = 'L';

      it("throws an error", function(){
        var e = new Error("The coordinate is invalid.");

        expect(function() {
          coordinateForMovement(position, coordinate);
        }).toThrow(e);

      });
    });
    
  });
});
