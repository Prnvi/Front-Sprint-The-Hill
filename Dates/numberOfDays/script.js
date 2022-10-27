/**Exercise 2
Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

Write a function to find how many days have passed since any point in time (after 1970). */

let dob = new Date('1993-02-02');
let today = new Date();
console.log(today);

var diff = Math.floor((Date.parse(today) - Date.parse(dob)) / 86400000);
console.log(diff +"days old");

// Write a function to find how many days have passed since any point in time (after 1970).

let givenYear = new Date('1970')
let days = Math.floor((new Date()-givenYear.getTime())/86400000)
console.log(days+" days passed since 1970")