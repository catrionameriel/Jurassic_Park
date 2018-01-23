const assert = require('assert');
const Dinosaur = require('../dinosaur');
const Park = require('../park');

describe('Park', function(){

  let park;
  let tyrannosaurus;
  let tyrannosaurus2;
  let velociraptor;
  let velociraptor2;

  beforeEach(function() {
    park = new Park();
    tyrannosaurus = new Dinosaur('Tyrannosaurus', 3);
    tyrannosaurus2 = new Dinosaur('Tyrannosaurus', 2);
    velociraptor = new Dinosaur('Velociraptor', 7);
    velociraptor2 = new Dinosaur('Velociraptor', 5);
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

  it ('can remove multiple dinosaurs of particular type', function() {
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(velociraptor);
    park.addDinosaur(tyrannosaurus);
    park.addDinosaur(velociraptor2);
    park.removeDinosaurByType('Velociraptor');
    assert.strictEqual(park.enclosure.length, 2);
  })

  it('can get dinosaurs with offspring more than 2', function() {
    park.addDinosaur(velociraptor);
    park.addDinosaur(tyrannosaurus2);
    park.addDinosaur(velociraptor2);
    assert.deepEqual(park.getDinosaursByNumberOfChildren(2), [velociraptor, velociraptor2]);
    assert.strictEqual(park.getDinosaursByNumberOfChildren(2).length, 2);
  })

  it('should be able to calculate number of dinosaurs after 1 year starting with 1 dinosaur', function(){
   park.addDinosaur(tyrannosaurus);
   assert.strictEqual(park.calculateDinosaurs(1), 4);
 });

 it('should be able to calculate number of dinosaurs after 2 years starting with 1 dinosaur', function(){
     park.addDinosaur(tyrannosaurus);
     assert.strictEqual(park.calculateDinosaurs(2), 16);
   });

})
