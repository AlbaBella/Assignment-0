function titleCaseEdit(title) {
  // Insert code here;

  //seperate each word of the title 
  var myTitle= title.split(' ');

  for(var i=0;i<myTitle.length;i++){
    myTitle[i]= myTitle[i].charAt(0).toUpperCase() + myTitle[i].substring(1);
  }
   //put wach word back with space and return the title
  return myTitle.join(' ');
}

// Do not edit this line;
module.exports = titleCaseEdit;
