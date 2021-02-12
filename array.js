// var hobbies = 'hunting, fishing, racing, explosions';
var x = 'apples';
x = 'bananas'; // re assigned the value of x to bananas from apples

var hobbies = ['coloring', 'painting', 'travel', 'dogs', 'cats'];
console.log(hobbies);
console.log(hobbies[2]); // travel
console.log(hobbies[0]); // coloring
console.log(hobbies[3]); // dogs
console.log(hobbies[4]); // undefined

// travel to skydiving HOW ???????????
// hobbies = ['coloring', 'painting', 'skydiving', 'dogs']; // DONT DO THIS THIS AWFUL
hobbies[2] = 'skydiving';
console.log(hobbies);

var arr1 = [55, true, 'string', 55]; // take any data types inside you want
var arr2 = [55, true, 'string', ['a', 'b', 'c', 1, 2, 3]];

console.log(arr2);
console.log(arr2[3][2]);

console.log(hobbies.length); //4
console.log(hobbies[hobbies.length - 1]); // the last element of the array

// Array methods

// indexOf
console.log(hobbies.indexOf('cats')); // 4
console.log(hobbies.indexOf('coloring')); // 0
console.log(hobbies.indexOf('turtles')); // -1 will retunr -1 when the parameter passed into indexOf doesn't exist in the array

// push
hobbies.push('turtles');
console.log(hobbies);
hobbies.push('aligators');
console.log(hobbies);
hobbies.push('seagulls', 'pteradactyls');
console.log(hobbies);

// pop
// hobbies.pop();
// hobbies.pop();
// hobbies.pop();
// hobbies.pop();
// hobbies.pop();
// hobbies.pop();
// console.log(hobbies);
// hobbies = [];
// console.log(hobbies);
// console.log(hobbies.length);
// hobbies.pop();
// console.log(hobbies);

// unshift adds something to the beginning of the array
console.log(hobbies);
hobbies.unshift('eating');
console.log(hobbies);

// shift removes something the begining of the array
// hobbies[0] = '';
// console.log(hobbies);
hobbies.shift();
console.log(hobbies);
