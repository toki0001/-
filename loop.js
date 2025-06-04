for (let i = 1; i <= 200; i++) {

if (i % 15===0) {
  document.write('FizzBuzz<br>');
} else if (i % 3===0) {
  document.write('Fizz<br>');
} else if (i % 5===0) {
  document.write('Buzz<br>');
} else if (i % 1===0) {
  document.write( i +'')
}
}