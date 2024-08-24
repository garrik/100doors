'use strict';

const doors = require('./doors.js');

describe('toggle door', () => {

  before(function() {
    doors.reset();
  });

  it('should open the door when it is closed', () => {
    doors.toggle(1).should.equal(1);
  });

  it('should close the door when it is open', () => {
    doors.toggle(0); // open the door
    doors.toggle(0).should.equal(0);
  });

});

describe('toggle doors', () => {

  beforeEach(function() {
    doors.reset();
  });
  
  it('should open 100 doors', () => {
    doors.toggleIncrement(1);
    doors.isOpen(0).should.equal(true);
    doors.isOpen(1).should.equal(true);
    doors.toggledCount().should.equal(100);
  });

  it('should open even doors', () => {
    doors.toggleIncrement(2);
    doors.isOpen(0).should.equal(true);
    doors.isOpen(1).should.equal(false);
    doors.toggledCount().should.equal(50);
  });

  it('should toggle doors', () => {
    doors.toggleAgain();
    doors.incrementUpdateCount().should.equal(100);
  });

});
