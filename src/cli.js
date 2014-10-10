var inquirer = require("inquirer");
var World = require("./world");
var Character = require("./character");

var isNumber = function(value) {
  return !isNaN(parseFloat(value));
}

var dimensionsRegex = /^\d*(\s*)x(\s*)\d*/
var positionRegex = /^\d*,(\s*)\d*,(\s*)(N|n|E|e|W|w|S|s)/
var movementRegex = /^(L|l|R|r|M|m)*/

var questions = [
  {
    type: "input",
    name: "worldDimensions",
    message: "What's the World's dimensions?",
    default: "9x9",
    validate: function(value) {
      return dimensionsRegex.test(value) || "World dimensions must be height x width";
    }
  },
  {
    type: "input",
    name: "landingPosition",
    message: "What's Tiffi's landing position?",
    default: "0,0,E",
    validate: function(value){
      return positionRegex.test(value) || "Landing position must be: coordinate x, coordinate y, cardinal direction (N, E, W, or S)"
    }
  },
  {
    type: "input",
    name: "movementPlan",
    message: "What's Tiffi's movement plan?",
    default: "MMLMRM",
    validate: function(value){
      return movementRegex.test(value) || "Movement must contain only directions (L or R) and moves (M)"
    }
  }
];

module.exports = {
  run: function() {
    inquirer.prompt(questions, function(answers) {

      var dimensions = answers.worldDimensions.split('x').map(function(d){
        return parseInt(d, 10);
      });

      var landingPosition = answers.landingPosition.toUpperCase();
      var movementPlan = answers.movementPlan.toUpperCase();

      var landingArgs = landingPosition.split(',');
      var landingCoordinates = landingArgs.slice(0, 2).map(function(c) {
        return parseInt(c, 10);
      });

      if (landingCoordinates[1] > dimensions[1] || landingCoordinates[0] > dimensions[0]){
        return console.log("Can't place character in the world. Position is out of bounds.");
      }

      var landingDirection = landingArgs[2].trim();

      var world = new World(dimensions);
      world.placeCharacter(Character, {
                            coordinate: landingCoordinates,
                            cardinalDirection: landingDirection
                          });

      movementPlan.split('').forEach(function(movement){
        world.character.move(movement);
      });

      console.log("Tiffi handed out candies and ended at: %s%s%s",
        world.character.currentPosition.coordinate[0],
        world.character.currentPosition.coordinate[1],
        world.character.currentPosition.cardinalDirection
      );
    });
  }
};
