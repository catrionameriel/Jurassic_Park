const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Tyrannosaurus', 2)
  })

  it('dinosaur has a type', function() {
    assert.strictEqual(dinosaur.type, 'Tyrannosaurus');
  })

  it('dinosaur has number of offspring', function() {
    assert.strictEqual(dinosaur.numberOfChildren, 2);
  })



})
