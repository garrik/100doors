'use strict';

const doors = require('./doors.js');
const state = require('./state.js');

describe('state of doors', () => {
  let displayCount;
  let displayed;
  
  function display(text){
    displayCount = displayCount + 1;
    displayed.push(text);
  }
  
  function render(door){
    return 'x' + (door === 1 ? 'open' : 'close');
  }

  before(function() {
    displayCount = 0;
    displayed = [];
    
    state.init(display);
 
    doors.reset();
    
  });

  it('should display state of each door', () => {
    doors.show(2, render, state);
    displayCount.should.equal(2);
  });

  it('should render state of each door', () => {
    doors.show(1, render, state);
    displayed[0].should.equal('xclose');
  });

});

describe('state of doors', () => {
  
  function render(door){
    return door === 1 ? 'open' : 'close';
  }

  before(function() {
    
    state.init(console.log);
 
    doors.reset();
    doors.toggleAgain();
   
  });

  it('should show state of 100 doors', () => {
    doors.show(100, render, state);
  });

});
