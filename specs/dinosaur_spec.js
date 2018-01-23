const assert = require('assert');
const Dinosaur = require('../dinosaur');

describe('Dinosaur', function() {

  let dinosaur;

  beforeEach(function(){
    dinosaur = new Dinosaur('Tyrannosaurus')
  })

  it('dinosaur has a type', function() {
    assert.strictEqual(dinosaur.type, 'Tyrannosaurus');
  })



})
