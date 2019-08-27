// Taking input from user
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (a) => {
    rl.question('Please enter the second number : ', (b) => {
        var result = parseInt(a) + parseInt(b);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});