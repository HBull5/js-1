/**
 * all of these pause the execution of the application
 */

/**
 * writes something annoying to the screen
 */
// alert('this is an alert!!!');
// alert('another pop up pls be annoyed by this');

/**
 * prompt awlways returns a string
 * you can save the value by storing it in a variable like this
 */
// var username = prompt('What is your name?');
// var age = prompt('What is your age?'); // comes back as a string "27" -> 27

// reassign the age variable to the provided age + 10 years
// age = Number(age) + 10;

// 2 + 2 = 4 addition
// '2' + 2 = 22 concatenation
// 2 + 2 + 2 + '2'
// 2 * 2 + '2'  = 4 + '2' = '42'

// document.querySelector('h1').innerHTML = 'Hello ' + username + ' you are ' + age + ' years old.';
// alert('Hello ' + username + ' you are ' + age + ' years old.');

/**
 * confirm always results in a boolean
 */
// var canDrink = confirm('Are you 21 years or older?');

// console.log(canDrink);

const response = prompt('?');
document.querySelector('h1').innerHTML = response;
