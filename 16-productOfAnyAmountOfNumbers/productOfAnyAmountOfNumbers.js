function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  //var product=0;
  return args.reduce((prev, curr) => {
    return prev * curr;
  });
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;