// all about comments

// single line comment
// var x = 1; as long as I'm on this line

// multi line comment
/* 
    multiline comment
    so many lines
    all on different lines 
*/

/* 
    my comment goes here
*/

// javadoc comments -> typically used for documentation
/**
 * @params String
 * @return Writes the string out to the console
 */
function foo(str) {
	console.log(str);
}

// console.log('hello world');
// console.error('THIS IS AN ERROR!');
// console.warn('OMG everything is on fire');
// console.log('console.log()');

// ALL ABOUT VARIABLES

// variable declaration
var x; // same as var x = undefined;
// console.log(x);

// variable assignment
x = 1;
console.log(x);

// variable assignment + declaration
var y = 'string';
// console.log(y);

// variable overwritting OR reassignment
x = 2;
console.log(x);
// x = undefined;

var _ = 'underscore';
console.log(_);

// DATA TYPES

// STRINGS

var str = 'string 1';
// prettier-ignore
var str2 = "string 2";
var str3 = `string 3`;
var sentence = "Hello I'm harcourt";
var setence2 = "Hello I'm harcourt";
var quote = 'Harcourt said "my students were wonderful"';
var crazyTic = `'"\``;
var helloWorld = 'hello\n\nworld';
helloWorld = 'hello\tworld';
// console.log('hello');
// console.log('world');
console.log(helloWorld);
var hello = 'hello';
var world = 'world';
console.log(hello + ' ' + world + (10 + 30));

// NUMBERS

var num1 = 1;
var num2 = '2';
console.log(num1 + num2);
var num3 = 3;
console.log(num1 + num3);
console.log(num3 - num1);
console.log(num3 * num1);
console.log(num3 / num1); // 3

// BOOLEANS

var bool = true;
var bool2 = false;

// truthy OR falsy
// FALSY: undefined, 0, -0, null, '' OR "" OR ``, NaN
// TRUTHY: everything else

// OBJECTS

const myCar = {
	make: 'volks',
	model: 'jetta',
	year: '2011',
	engine: '2.5l'
};

var myVar = 'string';
myVar = 5;
myVar = true;
myVar = {
	key: 'value'
};

// TYPE OF

console.log(typeof myVar);

console.log(-1 * 3);

var myNumber = 5;
console.log(myNumber.toString()); // ??? 5 string
console.log(myNumber); // ??? 5 number
// myNumber = myNumber.toString();
myNumber = String(myNumber);
console.log(myNumber); // ??? string OR number? a white 5
console.log(typeof myNumber); // string

var myStringNumber = '55.5';
console.log(parseFloat(myStringNumber));
