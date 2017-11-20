function roundDown(number){
  return Math.floor(number);
}


module.exports = {

  a: 2,

  b: 3 ,

  sum: function (a,b){

    return roundDown(a + b);
  }

}