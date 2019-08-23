// console.log('hello world');

// console.log(a);

// var a= 5;

// var x = 45;


// if(x>95){
//     console.log("student is brilliant");
// }

// else if(x<30){
//     console.log("student is poor");
// }

// else if(x<95 && x>30){
//     console.log("student is average ")
// }

// else{
//     console.log('student is average');
// }




// var z = 4;

// switch (z) {
//     case 1:
//         console.log("one");
//         break;
//         case 2:
//         console.log('two');
//         break;
//         case 3:
//             console.log('three');
//             break;
//     default:
//         console.log('not executed');
//         break;
// }


// var i = 1;

// for(var j = 0 ; j<=3; j++){
//     console.log(i);
//     i = i*5;   
// }

// var z = 0;
// for (var a = 0; a<=3; a++){
//     z = (z*10)+1;
//     console.log(z);
// }

// var y = 0;
// for (var b = 0; b<=6; b++){
//     console.log(y);
//     if(b%2 == 0){
//         y = (y*10)+1;
//     }
//     else{
//         y = (y*10)
//     }
// }
function displayPyramid(n) {
    for (var i = 0; i < n; i++) {
     var str = '';
      for (var j = 1; j < n-i; j++) {
         str = str + ' ';
      }
      for (var k = 1; k <= (2*i+1); k++) {
        str = str + '*';
      }
      console.log(str);
    }
  }
  displayPyramid(5);