'use strict';

const doors = require('./doors.js');
const printer = require('./printer.js');

describe('the printing of doors', () => {
  
  function render(isOpen){
    return 'x' + isOpen;
  }
  
  let displayCount, displayed;
  function display(text){
    displayCount = displayCount + 1;
    displayed.push(text);
  }
  
  beforeEach(() => {
    printer.init(display);
    displayCount = 0;
    displayed = [];
  })
  
  it('should display each door state', () => {
    printer.showDoors(render);
    displayCount.should.equal(100);
  });

  it('should render each door state', () => {
    printer.showDoors(render)
    displayed[0].should.equal('xfalse');
  });

  it('should show each door state', () => {
    printer.init(console.log);
    printer.visitDoorsIncrementingStepUntil(100);
    printer.showDoors((isOpen) => `the door is ${isOpen ? 'open' : 'closed'}` )
  });

});
