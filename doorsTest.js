'use strict';

const doors = require('./doors.js');

describe('the door', () => {

  beforeEach(() => {
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
  })
  
  it('should be closed at 1st position', () => {
    doors.isOpen(0).should.equal(false);
  });

  it('should be closed at 100th position', () => {
    doors.isOpen(99).should.equal(false);
  });

  it('should be open after being toggled', () => {
    doors.toggle(0);
    doors.isOpen(0).should.equal(true);
  });
});

describe('the state of visited doors', () => {

  beforeEach(() => {
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
  })
  
  it('should be all open after being all visited once', () => {
    doors.visit(1);
    doors.isOpen(0).should.equal(true);
    doors.isOpen(1).should.equal(true);
    doors.isOpen(99).should.equal(true);
  });


  it('should be alternate open after one in two being visited', () => {
    doors.visit(2);
    doors.isOpen(0).should.equal(true);
    doors.isOpen(1).should.equal(false);
    doors.isOpen(2).should.equal(true);
    doors.isOpen(99).should.equal(false);
  });

  it('should be 1st open, 2nd open, 3rd closed, 6th open and last closed after being visited all, one in two and one in three', () => {
    doors.visit(1);
    doors.visit(2);
    doors.visit(3);
    doors.isOpen(0).should.equal(true);
    doors.isOpen(1).should.equal(true);
    doors.isOpen(2).should.equal(false);
    doors.isOpen(6).should.equal(true);
    doors.isOpen(99).should.equal(false);
  });
  
});

describe('the visit of doors with incremental step', () => {

  let toggledCounters;
  
  function toggle(index){
    toggledCounters[index] = toggledCounters[index] + 1; 
  }
  
  beforeEach(() => {
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
    ], toggle);
    toggledCounters = new Array(doors.count()).fill(0);
  })
  
  it('should visit all doors once', () => {
    doors.visitIncrementingStepUntil(1);
    toggledCounters[0].should.equal(1);
    toggledCounters[1].should.equal(1);
    toggledCounters[99].should.equal(1);
  });

  it('should visit odd doors once, even doors twice', () => {
    doors.visitIncrementingStepUntil(2);
    toggledCounters[0].should.equal(2);
    toggledCounters[1].should.equal(1);
    toggledCounters[0].should.equal(2);
    toggledCounters[99].should.equal(1);
  });
  
});
