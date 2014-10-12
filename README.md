# Tiffi on Mars

[![Build Status](https://travis-ci.org/sarahpimentel/tiffi-on-mars.svg?branch=master)](https://travis-ci.org/sarahpimentel/tiffi-on-mars)
[![Code Climate](https://codeclimate.com/github/sarahpimentel/tiffi-on-mars/badges/gpa.svg)](https://codeclimate.com/github/sarahpimentel/tiffi-on-mars)
[![Test Coverage](https://codeclimate.com/github/sarahpimentel/tiffi-on-mars/badges/coverage.svg)](https://codeclimate.com/github/sarahpimentel/tiffi-on-mars)

Tiffi has been sent to Mars to give candies to Martians.

In an agreement with NASA, Tiffi and a robotic rover are going to land on a plateau on Mars. This plateau is curiously rectangular and limited and is represented in a grid (example: 9,9).

The position and location of the rover is represented by a combination of **x** and **y** coordinates and a letter representing one of the four cardinal compass points (**N**, **S**, **E**, **W**). An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to drive Tiffi around Mars, NASA sends a simple string of letters. The possible letters are **L**, **R** and **M**. **L** and **R** makes the rover spin 90 degrees left or right respectively, without moving the rover from its current position. **M** means move forward one grid point, and maintains the same heading. Any other instruction is ignored. The square directly North from (x, y) is (x, y+1).

####Input:

There are 3 strings as input.

1) the size of the plateau

2) the position where the rover has landed

3) the sequence of movements the rover has to perform so that Tiffi can hand out the candies.

####Output:

The output is Tiffi’s last position and orientation, so she can be collected and brought back to Earth to load up on candy.

####Example:

```
? What are the World's dimensions? 9x9
? What's Tiffi's landing position? 0,0,E
? What's Tiffi's movement plan? MMLMRM
Tiffi handed out candies and ended at: 3,1,E
```

## Setting up
```
brew install node
npm install
```

## Run in interactive mode:
```
npm start
```

## Run the tests
```
npm test
```
