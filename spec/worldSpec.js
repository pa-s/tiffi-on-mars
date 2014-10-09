var World = require("../src/world.js");
var Character = require("../src/character.js");


describe("World", function(){
  describe("constructor", function(){
    it ("stores the given dimension as its width and height", function(){
      var dimensions = [9,9],
        world = new World(dimensions);

      expect(world.dimensions).toEqual({
        width: dimensions[0],
        height: dimensions[1]
      });
    });

    describe("when dimensions are of a wrong type", function(){
      it ("throws an error", function(){
        var e = new Error("The world dimensions are invalid."),
          dimensions = "9,9";

        expect(function() {
          world = new World(dimensions);
        }).toThrow(e);
      });
    });

    describe("when dimensions have invalid length", function(){
      it ("throws an error", function(){
        var e = new Error("The world dimensions are invalid."),
          dimensions = [1,2,3];

        expect(function() {
          world = new World(dimensions);
        }).toThrow(e);
      });
    });

    describe("when any of the dimensions is 0", function(){
      it ("throws an error for width 0", function(){
        var e = new Error("The world dimensions are invalid."),
          dimensions = [0,2];

        expect(function() {
          world = new World(dimensions);
        }).toThrow(e);
      });

      it ("throws an error for height 0", function(){
        var e = new Error("The world dimensions are invalid."),
          dimensions = [2,0];

        expect(function() {
          world = new World(dimensions);
        }).toThrow(e);
      });
    });
  });

  describe("#placeCharacter", function(){
    it("instantiates a character in the world in the given position", function(){
      var world = new World([9,9]),
        coordinate = [2,2],
        cardinalDirection = "E",
        character = new Character(coordinate, cardinalDirection);

      world.placeCharacter(Character, {
        coordinate: coordinate,
        cardinalDirection: cardinalDirection
      });

      expect(world.character).toEqual(character);
    });

    describe("character is not a Character", function(){
      it("throws an error", function(){
        var world = new World([9,9]),
          coordinate = [2,2],
          cardinalDirection = "E",
          e = new Error("The Character is invalid.");

        expect(function() {
          world.placeCharacter(World, {
            coordinate: coordinate,
            cardinalDirection: cardinalDirection
          });
        }).toThrow(e);
      });
    });

    describe("charcater is out of bounds", function(){
      it("throws an error if coordinate x is out of bounds", function(){
        var world = new World([9,9]),
          coordinate = [10,9],
          cardinalDirection = "E",
          e = new Error("The character is out of world's boundaries.");

        expect(function() {
          world.placeCharacter(Character, {
            coordinate: coordinate,
            cardinalDirection: cardinalDirection
          });
        }).toThrow(e);
      });

      it("throws an error if coordinate y is out of bounds", function(){
        var world = new World([9,9]),
          coordinate = [9,10],
          cardinalDirection = "E",
          e = new Error("The character is out of world's boundaries.");

        expect(function() {
          world.placeCharacter(Character, {
            coordinate: coordinate,
            cardinalDirection: cardinalDirection
          });
        }).toThrow(e);
      });

      it("throws an error if coordinate x is invalid", function(){
        var world = new World([9,9]),
          coordinate = [-9,9],
          cardinalDirection = "E",
          e = new Error("The character is out of world's boundaries.");

        expect(function() {
          world.placeCharacter(Character, {
            coordinate: coordinate,
            cardinalDirection: cardinalDirection
          });
        }).toThrow(e);
      });

      it("throws an error if coordinate y is invalid", function(){
        var world = new World([9,9]),
          coordinate = [9,-9],
          cardinalDirection = "E",
          e = new Error("The character is out of world's boundaries.");

        expect(function() {
          world.placeCharacter(Character, {
            coordinate: coordinate,
            cardinalDirection: cardinalDirection
          });
        }).toThrow(e);
      });
    });

    describe("character has invalid cardinalDirection", function(){
      var world = new World([9,9]),
        coordinate = [9,9],
        cardinalDirection = "X",
        e = new Error("The character's cardinalDirection is invalid.");
        
      expect(function() {
        world.placeCharacter(Character, {
          coordinate: coordinate,
          cardinalDirection: cardinalDirection
        });
      }).toThrow(e);
    });

  });



});
