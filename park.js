const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

Park.prototype.removeDinosaurByType = function (type) {
  for (let dinosaur of this.enclosure) {
    if (type === dinosaur.type) {
      let index = this.enclosure.indexOf(dinosaur);
      this.enclosure.splice(index, 1);
    }
  }
};

Park.prototype.getDinosaursByNumberOfChildren = function (numberToCheck) {
  let dinosaursToReturn = [];
  for (let dinosaur of this.enclosure) {
    if (dinosaur.numberOfChildren > numberToCheck) {
      dinosaursToReturn.push(dinosaur);
    }
  }
  return dinosaursToReturn;
};

module.exports = Park;
