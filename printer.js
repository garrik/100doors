'use strict';

const doors = require('./doors.js');

module.exports = {
  init,
  showDoors,
  visitDoorsIncrementingStepUntil
};

let display_;


function init(display = (text) => console.log(`the door is ${text}`)){
  display_ = display;
  doors.init([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]);
}

function showDoors(render){
  for (let i = 0; i < doors.count(); i++) {
    display_(render(doors.isOpen(i)));
  }
}

function visitDoorsIncrementingStepUntil(n){
  doors.visitIncrementingStepUntil(n);
}