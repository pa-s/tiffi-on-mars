var Character = require("./character.js");
var rules = require("./config");

function World(dimensions) {
  if (!Array.isArray(dimensions) ||
    dimensions.length !== 2 ||
    dimensions[0] <= 0 ||
    dimensions[1] <= 0){
    throw new Error("The world dimensions are invalid.");
  }

  this.dimensions = {
    width: dimensions[0],
    height: dimensions[1]
  };
}

World.prototype.placeCharacter = function(Ctor, options){
  if (Ctor !== Character) {
      throw new Error("The Character is invalid.");
  }

  if (options.coordinate[0] > this.dimensions.width ||
      options.coordinate[1] > this.dimensions.height ||
      options.coordinate[0] < 0 ||
      options.coordinate[1] < 0) {
      throw new Error("The character is out of world's boundaries.");
  }

  if (rules.cardinalDirectionRules[options.cardinalDirection] === undefined){
    throw new Error("The character's cardinalDirection is invalid.");
  }

  this.character = new Character(options.coordinate, options.cardinalDirection);
};


module.exports = World;
