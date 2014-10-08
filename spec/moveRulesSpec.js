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
    
  });
});
