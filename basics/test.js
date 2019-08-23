function display(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i; j++) {
    }
    for (var k = 1; k <= 2 * i + 1; k++) {
      process.stdout.write("*");
    }
    console.log(" ");
  }
}

display(6);
