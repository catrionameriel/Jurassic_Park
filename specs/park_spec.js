const assert = require('assert');
const Dinosaur = require('../dinosaur');
const Park = require('../park');

describe('Park', function(){

  let park;
  let tyrannosaurus;
  let velociraptor;

  beforeEach(function() {
    park = new Park();
    tyrannosaurus = new Dinosaur('Tyrannosaurus', 2);
    velociraptor = new Dinosaur('Velociraptor', 7);
  })

  it('park starts with no dinosaurs', function() {
    assert.strictEqual(park.enclosure.length, 0)
  })

  it('can add dinosaur', function() {
    park.addDinosaur(tyrannosaurus);
    assert.strictEqual(park.enclosure.length, 1)
  })

  it ('can remove dinosaur of particular type', function() {
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(velociraptor);
    park.removeDinosaurByType('Velociraptor');
    assert.strictEqual(park.enclosure.length, 1);
  })

})
