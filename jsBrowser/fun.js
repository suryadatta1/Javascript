// function fixCurry(fn, totalArgs){
//     totalArgs = totalArgs ||fn.length
//         return function recursor(){
//             return arguments.length<totalArgs?recursor.bind(this, ...arguments): fn.call(this, ...arguments);
//         }
// }
// var multiply = fixCurry((a,b,c)=>a*b*c);
// console.log(multiply(1)(3)(2))

// let fx = ((a)=>{
//     return((b)=>{
//         return((c)=>{
//             console.log(a*b*c)
//         })
//     })
// })
// fx(8)(9)(10)

// function add(x){
//     let sum = x;
//     return function resultFn(y){
//         if(arguments.length){ //not relying on falsy value
//             sum *= y;
//             return resultFn;
//         }
//         return sum;
//     }
// }

// console.log(add(2)(3)())

const arr = [100, 200, 300, 400];
for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(i, arr[i]);
  }, 3000);
}

// for (i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.warn(i);
//   }, 3000);
// }

// var obj = { num: 2 };

// var addTothis = function(a, b, c) {
//   return this.num + a + b + c;
// };

// console.log(addTothis.call(obj, 3, 2, 1));

// var arra = [1, 2, 3];
// var bound = addTothis.bind(obj);
// console.dir(bound);

// console.log(bound(1,2,3));



var test = (x) => {

          
  switch (x) {
      case 1:
            p++;
          console.log(p);
          
      case 2:
          var p = 5;
           console.log(p);
          break;   // ?? what will happen if we remove this break point and then execute?
      case 3:
          p++;
          console.log(p);
      default:
          console.log(p);
  }

}

test(1);
test(2);
test(3);
test(4);


