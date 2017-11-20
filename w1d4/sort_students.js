var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
// console.log(students);

var result = students.sort(function(a, b){

  if(a.name > b.name){
    return 1;
  }

  else if(b.name > a.name){
    return -1;
  }
  else if(a.name === b.name){
     return b.age - a.age;
  }
})

console.log(result);

