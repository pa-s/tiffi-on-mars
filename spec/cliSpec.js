var cli = require("../src/cli.js");
var inquirer = require("inquirer");

describe("cli", function(){
  describe("#validateDimensions", function(){
    describe("when invalid", function(){
      it("returns a message", function(){
        expect(cli.validateDimensions("9")).toBe("World dimensions must be height x width");
      });
    });

    describe("for valid inputs", function(){
      it("returns true", function(){
        expect(cli.validateDimensions("9x9")).toBe(true);
      });
    });
  });

  describe("#validatePosition", function(){
    describe("when invalid", function(){
      it("returns a message", function(){
        expect(cli.validatePosition("9")).toBe("Landing position must be: coordinate x, coordinate y, cardinal direction (N, E, W, or S)");
      });
    });

    describe("for valid inputs", function(){
      it("returns true", function(){
        expect(cli.validatePosition("0,0,E")).toBe(true);
      });
    });
  });

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
