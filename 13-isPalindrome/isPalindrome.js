function isPalindrome(word) {
  // Insert code here;

  var mid=Math.floor(word.length/2); //finding the half length of the word
  var isPalindrome=true;
  var start=0; //starting point
  var end=word.length-1;//ending point
  
  //comparing the letters from start to end
  for(var i=0;i<mid;i++){
    if (word[start] !== word[end]) {
      isPalindrome=false;
    }
    start++;
    end--;
  }
  
  return isPalindrome;

}

// Do not edit this line;
module.exports = isPalindrome;