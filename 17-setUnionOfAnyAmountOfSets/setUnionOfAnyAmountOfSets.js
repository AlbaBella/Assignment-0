function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;

  var mySet= new Set();
  for (let sets of args){
    for (let num of sets){
      mySet.add(num);
    }
  }
    return mySet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;