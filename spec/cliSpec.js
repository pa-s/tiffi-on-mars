var cli = require("../src/cli.js");
var inquirer = require("inquirer");

describe("cli", function(){
  describe('#run', function() {
    beforeEach(function(){
      spyOn(inquirer, 'prompt');
      this.spy = spyOn(console, "log");
    });

    describe("Given a position out of bounds", function(){
      var dimensions = "9x9",
        landingPosition = "12,12,N";

      it("returns an error message", function(){
        cli.run();

        var fn = inquirer.prompt.mostRecentCall.args[1];

        fn({
          worldDimensions: dimensions,
          landingPosition: landingPosition,
          movementPlan: ""
        });

        expect(this.spy).toHaveBeenCalledWith("Can't place character in the world. Position is out of bounds.");
      });
    });

    describe("Given valid data", function(){
      var dimensions = "9x9",
        landingPosition = "0,0,E",
        movementPlan = "MMLMRM";

      it("returns final position", function(){
        cli.run();

        var fn = inquirer.prompt.mostRecentCall.args[1];

        fn({
          worldDimensions: dimensions,
          landingPosition: landingPosition,
          movementPlan: movementPlan
        });

        expect(this.spy).toHaveBeenCalledWith('Tiffi handed out candies and ended at: %s%s%s', 3, 1, 'E');
      });
    });
  });

});
