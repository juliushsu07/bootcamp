var str = '{"a":1, "b":2, "foo":"bar"}'; // string version of a JS Object
var obj = JSON.parse(str);

console.log(obj);     // an Object that has been deserialized

delete obj.foo;       // modify the object

console.log(obj);
console.log(typeof obj);
JSON.stringify(obj);  // serialize it back to a string
console.log(typeof JSON.stringify(obj));
