'use strict';

module.exports = {
  toggledCount,
  toggle,
  toggleIncrement,
  reset,
  isOpen,
  toggleAgain,
  incrementUpdateCount,
  show
};

let doors_;
let toggledCount_;
let incrementUpdateCount_;

// zero means port is closed, one means door is open
function doors() {
  return [
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
  ];
}

function reset() {
  doors_ = doors();
  toggledCount_ = 0;
  incrementUpdateCount_ = 0;
}

function toggledCount() {
  return toggledCount_;
}

function incrementUpdateCount() {
  return incrementUpdateCount_;
}

function isOpen(i) {
  return doors_[i] === 1;
}

function toggle(i) {
  doors_[i] = (doors_[i] + 1) % 2;
  toggledCount_++;
  return doors_[i];
}

function toggleIncrement(increment) {
  for (let i = 0; i < doors_.length; i = i + increment) {
    toggle(i);
  }
}

function toggleAgain() {
  for (let i = 1; i <= doors_.length; i++) {
    toggleIncrement(i);
    incrementUpdateCount_++;
  }
}

function show(count, render, state) {
  return state.showState(count, render, doors_);
}
