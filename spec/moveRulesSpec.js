var moveRules = require('../src/moveRules');

describe("Move Rules", function() {
  describe("Given coordinate N", function(){
    var coordinate = 'N';

    describe("Given direction R", function(){
      var direction = 'R';

      it("returns E", function() {
        expect(moveRules(coordinate, direction)).toBe('E');
      });

    });

    describe("Given direction L", function(){
      var direction = 'L';

      it("returns W", function() {
        expect(moveRules(coordinate, direction)).toBe('W');
      });

    });

  });

  describe("Given coordinate E", function(){
    var coordinate = 'E';

    describe("Given direction R", function(){
      var direction = 'R';

      it("returns S", function() {
        expect(moveRules(coordinate, direction)).toBe('S');
      });

    });

    describe("Given direction L", function(){
      var direction = 'L';

      it("returns N", function() {
        expect(moveRules(coordinate, direction)).toBe('N');
      });

    });

  });

  describe("Given an invalid coordinate", function(){
    var coordinate = 'L';

    it("throws an error", function(){
      var e = new Error("The coordinate is invalid.");
      expect(function() {
        moveRules(coordinate, 'R');
      }).toThrow(e);

    });

  });

  describe("Given an invalid direction", function(){
    var direction = 'N';

    it("throws an error", function(){
      var e = new Error("The direction is invalid.");
      expect(function() {
        moveRules('S', direction);
      }).toThrow(e);

    });

  });

});
