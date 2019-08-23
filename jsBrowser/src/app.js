// const fun = (a,b)=>{
// return parseInt(a,b);
// }

// console.log(["1", "7", "11"].map((a,b,c,d)=>console.log(a,b,c,d)));
// // console.log(parseInt(10));

let x = function() {
  console.log("i am called from insidea function");
};

let y = function(callback) {
  console.log("do something");
  callback();
};
y(x);

// let calc = function(num1,num2,calctype){
//     if(calctype === 'add'){
//         return num1 + num2;
//     }
//     else if(calctype === 'multiply'){
//         return num1 * num2;
//     }
// };

// console.log(calc(2,3,'add'));

let add = function(a, b) {
  return a + b;
};
let multiply = function(a, b) {
  return a * b;
};

let doWhatever = function(a, b) {
  console.log(`here are your two numnbers ${a} , ${b}`);
};

let calc = function(num1, num2, callback) {
  if (typeof callback === "function") {
    return callback(num1, num2);
  }
};

console.log(calc(2, 3, doWhatever));

console.log(calc(2, 3, add));

var myArr = [
  {
    num: 5,
    str: "apple"
  },
  {
    num: 7,
    str: "cabbage"
  },
  {
    num: 1,
    str: "bannana"
  }
];

myArr.sort(function(val1, val2) {
  if (val1.num > val2.num) {
    return -1;
  } else {
    return 1;
  }
});

console.log(myArr);

let promise = new Promise((resolve, reject) => {
  let isClean = true;
  if (isClean) {
    resolve("clean");
  } else {
    reject("not clean");
  }
});

promise
  .then(fromResolve => {
    console.log(`the room is ${fromResolve}`);
  })
  .catch(fromReject => {
    console.log(`the room is ${fromReject}`);
  });

let cleanRoom = () => {
  return new Promise((resolve, reject) => {
    resolve("cleaned the room");
  });
};

let removeGarabage = p => {
  return new Promise((resolve, reject) => {
    resolve(`Remove Garbage ${p}`);
  });
};

let winIcecream = p => {
  return new Promise((resolve, reject) => {
    resolve(`win icecream ${p}`);
  });
};

cleanRoom()
  .then(result => {
    return removeGarabage(result);
  })
  .then(result => {
    return winIcecream(result);
  })
  .then(result => {
    console.log(`finished ${result}`);
  });

Promise.all([cleanRoom(), removeGarabage(), winIcecream()]).then(() => {
  console.log("finished");
});
