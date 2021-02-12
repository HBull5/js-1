var num1 = 2;
var num2 = 4;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num2 / num1);
// console.log(num1 / num2);

console.log(10 % 5); // remainder 0
console.log(11 % 3); // remainder 2

// how to determine if a number is even??? or odd??
console.log(47 % 2); // should return 0 b/c 10 is even

// PEMDAS
console.log(2 + 2 * 4); // 10 NOT 16
console.log((2 + 2) * 4); // 16

var int = 5;
var dec = 5.5;
var dec2 = 5.00000001;

// PI
console.log('PI STUFF');
var diameter = 12;
console.log(Math.PI * 12);

// round
console.log('ROUND METHOD');
console.log(Math.round(int)); // 5
console.log(Math.round(dec)); // 6
console.log(Math.round(dec2)); // 5

// ceil
console.log('CEILING METHOD');
console.log(Math.ceil(int));
console.log(Math.ceil(dec));
console.log(Math.ceil(dec2));

// floor
console.log('FLOOR METHOD');
console.log(Math.floor(int)); // 5
console.log(Math.floor(dec)); // 5
console.log(Math.floor(dec2)); // 5

// sqrt
console.log('SQUARE ROOT');
console.log(Math.sqrt(16)); //4
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(4)); // 2
console.log(Math.sqrt(7));

// abs
console.log('ABSOLUTE VALUE');
console.log(Math.abs(1)); // 1
console.log(Math.abs(-10)); // 1

// pow
console.log('POWERS EXPONENTS');
console.log(Math.pow(2, 2)); // 4
console.log(Math.pow(4, 10)); // giant number

// min
console.log('MINIMUM');
console.log(Math.min(3, 4, 5, 6)); // 3
console.log(Math.min(-1, 3, 4, 5, 6)); // -1

// max
console.log('MAXIMUM');
console.log(Math.max(3, 4, 5, 6)); // 6
console.log(Math.max(-1, 3, 4, 5, 6)); // 6

// random
console.log('RANDOM');
console.log(Math.random());

// How can we create a random number between 1 & 10?
console.log('RANDOM # BETWEEN 1 - 10');
console.log(parseInt(Math.random() * 10) + 1); // will work
console.log(Math.floor(Math.random() * 10) + 1); // will work
