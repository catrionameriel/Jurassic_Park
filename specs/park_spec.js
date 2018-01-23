const assert = require('assert');
const Dinosaur = require('../dinosaur');
const Park = require('../park');

describe('Park', function(){

  let park;
  let dinosaur;

  beforeEach(function() {
    park = new Park();
    dinosaur = new Dinosaur('Tyrannosaurus', 2);
  })

  it('park starts with no dinosaurs', function() {
    assert.strictEqual(park.enclosure.length, 0)
  })

  it('can add dinosaur', function() {
    park.addDinosaur(dinosaur);
    assert.strictEqual(park.enclosure.length, 1)
  })

})
