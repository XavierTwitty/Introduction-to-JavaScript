// /************************************************************** Task 1: Warm-up! **************************************************************/
// //Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 19;

if (votingAge > 18) {
  console.log(true);
}

// //Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let speak = 28;
let value = 20;

if (speak > 18) {
  console.log(value);
}

// //Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let get = Number("1999");

console.log(get);

//Task d: Write a function to multiply a*b

const mult = (a, b) => console.log(a * b);

mult(7, 8);

// /************************************************************** Task 2 **************************************************************/
// //Age in Dog years
// //write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

const myAge = (age) => console.log(age * 7);

myAge(24);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// if (programmingYear > 7 ){
//     salary = 130000
// } else if (programmingYear >4 ){
//     salary =110000
// }else if (programmingYear >2){
//     salary = 100000
// }
// else {
//     salary = 900000
// }
//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight
const dogFeeder = (dogLbs, years) => {
  if (years >= 1) {
    if (dogLbs <= 5) {
      console.log(dogLbs * 0.05);
    } else if (dogLbs <= 10) {
      console.log(dogLbs * 0.04);
    } else if (dogLbs <= 15) {
      console.log(dogLbs * 0.03);
    } else {
      console.log(dogLbs * 0.02);
    }
  } else {
    if (years < 0.4) {
      console.log(dogLbs * 0.1);
    } else if (years < 0.7) {
      console.log(dogLbs * 0.05);
    } else {
      console.log(dogLbs * 0.04);
    }
  }
};
dogFeeder(15, 1);

// /************************************************************** Task 4 **************************************************************/
// // Rock, Paper, Sissors
// // Your function should take a string (either rock paper or sissors)
// // it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// // use math.random to determine the computers choice
// // hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 


var choice = "" ; 

const rPS = (choice) => console.log {


}



// /************************************************************** Task 5 **************************************************************/
// //Metric Converter
// //a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const miles = (km) => console.log(km * 0.621371);

miles(5);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

const centimeters = (feet) => console.log(feet * 30.48);

centimeters(5);

// /************************************************************** Task 6 **************************************************************/
// // 99 bottles of soda on the wall
// // create a function called annoyingSong
// // the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
const annoyingSong = (number, newNumber) => {
  var newNumber = number - 1;

  for (let i = 99; i >= 99; i--) {
    console.log(
      `${number} bot tle of beer on the wall , take one down pass it around ${newNumber}`
    );
  }
};

annoyingSong(99);
annoyingSong(98);
annoyingSong(97);

// function flip(repeat){
//   for (let i = 0; i < repeat; i++){
//     var coinFlip = Math.round(Math.random());
//     if (coinFlip === 1){
//       console.log("Heads");
//     }
//     else{
//       console.log("Tails");
//     }

//   }
//   }

//   flip(100);

// /************************************************************** Task 7 **************************************************************/
// //Grade Calculator
// //write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
// //90s should be A
// //80s should be B
// //70s should be C
// //60s should be D
// //and anything below 60 should be F

const gradeCalculator = (grade) => {
  if (grade >= 90) {
    console.log("A");
  } else if (grade >= 80) {
    console.log("B");
  } else if (grade >= 70) {
    console.log("C");
  } else if (grade >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
};

gradeCalculator(88);

// /************************************************************** Stretch **************************************************************/
// //Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// // Hint - you may need to study tomorrow's traning kit on arrays
// // try looking up the .includes() method

// /************************************************************** Stretch **************************************************************/
// //Take Rock, Paper, Sissors further
// //update your rock papers sissors code below to take a prompt from a user using the window object
