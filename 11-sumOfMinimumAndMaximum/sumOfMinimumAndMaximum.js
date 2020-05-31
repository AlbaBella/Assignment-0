function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  //set the first num as the min
  const min= Math.min(...nums);
  
  //set the last num as the max
  const max= Math.max(...nums);

  var sum=min+max;

  return sum;

}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;