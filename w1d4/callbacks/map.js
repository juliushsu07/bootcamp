var words = ["ground", "control", "to", "major", "tom"];

var map = function(arr, callback){
  var newArr = [];

  arr.forEach(function(element) {

    newArr.push(callback(element));

   });

  console.log(newArr);
  return newArr;
}

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});




