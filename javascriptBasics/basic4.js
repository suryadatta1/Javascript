// Fibanacci series using recursion

function fibonacci(num) {
  if (num <= 1){ 
      return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

 console.log(fibonacci(5));

//  Fibanacci series using for loop

function fib(number) {
  var previous_first = 0,
    previous_second = 1,
    next = 1;

  if (number==0) {
    return 1;
  }

  for (var i = 1; i <= number; i++) {
    next = previous_first + previous_second;
    previous_first = previous_second;
    previous_second = next;
  }
  return next;
}
console.log(fib(5));
