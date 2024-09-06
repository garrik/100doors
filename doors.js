'use strict';

module.exports = {
  init,
  isOpen,
  toggle,
  visit,
  visitIncrementingStepUntil,
  count
};

let doors_;
let toggle_;

function init(doors, doToggle = toggle){
  doors_ = doors;
  toggle_ = doToggle;
}

function isOpen(index) {
  return doors_[index] === 1 ? true : false;
}

function toggle(index){
  doors_[index] = doors_[index] === 1 ? 0 : 1;
}

function visit(step){
  for(let i = 0; i < doors_.length; i = i + step){
    toggle_(i);
  }
}

function visitIncrementingStepUntil(n){
  for(let i = 1; i <= n; i = i + 1){
    visit(i);
  }
}

function count(){
  return doors_.length;
}