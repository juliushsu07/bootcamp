/*
 * Write a loop that joins the contents of conceptList together
 * into one String, concepts, with each list item separated from
 * the previous by a comma.
 *
 * Note: you may not use the built-in Array join function.
 */

var conceptList = ["gists", "types", "operators", "iteration", "problem solving"];

 // a custom function written by you (you must define it too!)
var concepts = joinList(conceptList);

// Write your code here...
function joinList(array){
  if(array[0] === undefined){
    string = "";
  }

  var string = array[0];
  for(i = 1 ; i < array.length ; i++){
    string = string + ", " + array[i];
  }
  return string;
}

console.log("Today I learned about " + concepts + ".");



