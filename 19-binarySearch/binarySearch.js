class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;

    var found = false;
    var mid = Math.ceil(nums.length / 2)-1;
    var left = nums.slice(0, mid + 1);
    let right = nums.slice(mid + 1, nums.length);

    if (nums[mid] === target)
      return true;
    if(1 < nums.length ) {
      if (nums[mid] > target)
        found = this.binarySearch(left, target);
      else
        found = this.binarySearch(right, target);
    }
    return found;
  }
 
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;