const Park = function() {
  this.enclosure = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.enclosure.push(dinosaur);
};

// Park.prototype.removeDinosaurByType = function (type) {
//   for (let dinosaur of this.enclosure) {
//     if (type === dinosaur.type) {
//       let index = this.enclosure.indexOf(dinosaur);
//       this.enclosure.splice(index, 1);
//     }
//   }
// };
//don't remove while looping! push the one's you are keeping into a new array and then set the enclosure to that array.

Park.prototype.removeDinosaurByType = function (type) {
  let dinosaursOfRightType = []
  for (let dinosaur of this.enclosure) {
    if (type === dinosaur.type) {
      dinosaursOfRightType.push(dinosaur)
    }
    this.enclosure = dinosaursOfRightType;
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

Park.prototype.calculateDinosaurs = function (numberOfYears) {
  let numberOfDinosaurs = 0;
  for (let dinosaur of this.enclosure) {
    numberOfDinosaurs += ((dinosaur.numberOfChildren + 1) ** numberOfYears);
  }
  return numberOfDinosaurs;
};

module.exports = Park;
