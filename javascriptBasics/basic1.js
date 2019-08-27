// Hello World Program
console.log('helloworld')


// Reversing the string
let str = "surya";

console.log(str.split("").reverse().join(""));


// Checking given string is palindrome
var text = "surya";

var reversedText  = text.split('').reverse().join('');

if(text === reversedText){
console.log(`${text} is a palindrome`);
}

else {
    console.log(`${text} is not a palindrome`);
}


// Reversing the array
var arr = [1,2,3,4,5];

console.log(arr.reverse())


// getting ASCII charcter of a string
var string = "surya";
for(i=0;i<string.length;i++){
console.log(string.charCodeAt(i));
}

// checking Consonent or vowel
function isVowel(x) {
  if (x == "A" || x == "E" || x == "I" || x == "O" || x == "U"||x=="a"||x=="e"||x=="i"||x=="o"||x=="u") {
    console.log("vowel");
  } else {
    console.log("Consonent");
  }
}
isVowel("a");

// Changing charcters to Uppercase
var string1 = 'surya'

console.log(string1.toUpperCase());
