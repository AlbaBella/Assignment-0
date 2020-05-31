function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  //find the min value
  const min= Math.min(...nums);
  
  //find the max value
  const max= Math.max(...nums);

  var sum=min+max;

  return sum;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;