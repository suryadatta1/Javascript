// function b() {
//   console.log("called b");
// }
// b();

// console.log(a);

// var a = "hello world!";

// console.log(a);

// if (a === undefined) {
//   console.log("a is undefined!");
// } else {
//   console.log("a is defined!");
// }

// function two() {
//   console.log("two");
// }
// function one() {
//   console.log("two is running");
//   two();
// }

// one();

//Scope Chain
const myVar = 1;
function b() {
  console.log(myVar);
}

function a() {
  var myVar = 2;
  console.log(myVar)
  b();
}

a();

//ECMA Script

let x = 5;
let y = 5;
if (x >= y) {
  // console.log(c);
  let z = true;
  console.log(z);
}
else{
  let z= false
  console.log(z);
}


// let m = 3+4;

// console.log(m);
