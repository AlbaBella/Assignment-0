function pairSum(nums, target) {
  // Insert code here;

  if (nums.length<=1){
    throw "Please enter an array of atleast 2 numbers";

  }
  for(var i=0;i<nums.length;i++){
      for(var j=nums.length;j>i;j--){
        if (nums[i]+nums[j]==target)
        return true;
      }
    }
  return false;
}

// Do not edit this line;
module.exports = pairSum;