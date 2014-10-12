var cli = require("../src/cli.js");
var inquirer = require("inquirer");

describe("cli", function(){
  describe("#validateDimensions", function(){
    describe("regex validations", function(){
      describe("with letters", function(){
        it("returns an error message", function(){
          expect(cli.validateDimensions("9xa")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("axa")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("ax9")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("9ax9a")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("a9xa9")).toBe("World dimensions must be height x width. Example: 9x9");

          expect(cli.validateDimensions("9 x a")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("a x a")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("a x 9")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("9a x 9a")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("a9 x a9")).toBe("World dimensions must be height x width. Example: 9x9");
        });
      });

      describe("with invalid numbers", function(){
        it("returns an error message", function(){
          expect(cli.validateDimensions("-9x9")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("9x-9")).toBe("World dimensions must be height x width. Example: 9x9");

          expect(cli.validateDimensions("-9 x 9")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("9 x -9")).toBe("World dimensions must be height x width. Example: 9x9");
        });
      });

      describe("missing arguments", function(){
        it("returns an error message", function(){
          expect(cli.validateDimensions("x9")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("9x")).toBe("World dimensions must be height x width. Example: 9x9");

          expect(cli.validateDimensions(" x 9")).toBe("World dimensions must be height x width. Example: 9x9");
          expect(cli.validateDimensions("9 x ")).toBe("World dimensions must be height x width. Example: 9x9");
        });
      });
    });

    describe("for valid inputs", function(){
      it("returns true", function(){
        expect(cli.validateDimensions("9x9")).toBe(true);
        expect(cli.validateDimensions("99x99")).toBe(true);
        expect(cli.validateDimensions("9 x 9")).toBe(true);
        expect(cli.validateDimensions("99 x 99")).toBe(true);
      });
    });
  });

  describe("#validatePosition", function(){
    describe("when invalid", function(){
      it("returns a message", function(){
        expect(cli.validatePosition("9")).toBe("Landing position must be: coordinate x, coordinate y, cardinal direction (N, E, W, or S). Example: 0,0,E");
        expect(cli.validatePosition("9,9")).toBe("Landing position must be: coordinate x, coordinate y, cardinal direction (N, E, W, or S). Example: 0,0,E");
        expect(cli.validatePosition("9,n")).toBe("Landing position must be: coordinate x, coordinate y, cardinal direction (N, E, W, or S). Example: 0,0,E");
        expect(cli.validatePosition("0,0,NE")).toBe("Landing position must be: coordinate x, coordinate y, cardinal direction (N, E, W, or S). Example: 0,0,E");
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

        expect(this.spy).toHaveBeenCalledWith('Tiffi handed out candies and ended at: %s,%s,%s', 3, 1, 'E');
      });
    });

    describe("Given out of boundaries movements", function(){
      var dimensions = "9x9",
        landingPosition = "0,0,E",
        movementPlan = "RMRMRM";

      it("performs all valid moves ignoring the out of bounds movements", function(){
        cli.run();

        var fn = inquirer.prompt.mostRecentCall.args[1];

        fn({
          worldDimensions: dimensions,
          landingPosition: landingPosition,
          movementPlan: movementPlan
        });

        expect(this.spy).toHaveBeenCalledWith('Tiffi handed out candies and ended at: %s,%s,%s', 0, 1, 'N');
      });
    });
  });

});
