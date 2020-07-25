/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 16
let changeVariable = "change"

if (votingAge >= 18) {
  changeVariable = "you are old enough to vote"
}
else {
  changeVariable = "you are not old enough to vote"
}
console.log(changeVariable)

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let votingAge = 18
if (votingAge >= 18){
console.log("you are old enough to vote")
}
else {
console.log("you are not old enough to vote")
}

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

parseInt("1999")

//Task d: Write a function to multiply a*b

function doMultiplication (a, b){
  return a*b
  }



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

var age = prompt("How old are you?")
var dogAge

dogAge = age * 7

console.log(dogAge)



/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

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

dogFeed(100, 100)
dogFeed(5, 1)
dogFeed(8, 6) // 0.32 lbs
dogFeed(13, 5) //0.39 lbs
dogFeed(17, 4)//0.34
dogFeed(6, 3/12)//0.6
dogFeed(10, 1)

function dogFeed(weight, age){ 
  console.log("Age: " + age)
  console.log("Weight: " + weight)

  if (weight <= 5 && age >= 1) {
    return weight * 0.05 + " " + "lbs"
  }
  if (weight >= 6 && weight <= 10 && age >= 1){
    return weight * 0.04 + " " + "lbs"
  }
  if (weight >= 11 && weight <= 15 && age >= 1){
    return weight * 0.03 + " " + "lbs"
  }
  if (weight >= 15 && age >= 1){
    return weight * 0.02 + " " + "lbs"
  }
  if (age >= 2/12 && age <= 4/12){
    return weight * 0.10+ " " + "lbs"
  }
  if (age > 4/12 && age <= 7/12){
    return weight * 0.05 + " " + "lbs"
  }
  if (age > 7/12 && age < 1){
    return weight * 0.04 + " " + "lbs"
  }
}



// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

function dogFeeder (age, weight){
 
  let percentWeight = age/weight
   if (age >= 1)
     if (weight <= 5) {
   percentWeight = 0.05
     console.log(weight * percentWeight)
     }
   }



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

function roshambo (input){
  let rps = ["rock", "paper", "scissors"]
  
  let randomNumber = Math.floor(Math.random() * 3)
  let cc = rps[randomNumber]

  if (input === cc){
    console.log("you tied")
  } 
  else if (input === "rock" && cc === "paper") {
    console.log("you lose")
  }
  else if (input === "rock" && cc === "scissors") {
    console.log("you win")
  }
  else if (input === "paper" && cc === "rock") {
    console.log("you win")  
  } 
  else if (input === "paper" && cc === "scissors") {
    console.log("you lose")
  }
  else if (input === "scissors" && cc === "rock") {
    console.log("you lose")
  }
  else if (input === "scissors" && cc === "paper") {
    console.log("you win")
  }
    
  console.log(cc)
}


let input = prompt ("Do you choose rock, paper or scissors?")
  let rps = ["rock", "paper", "scissors"]
  let randomNumber = Math.floor(Math.random() * 3)
  let cc = rps[randomNumber]

  if (input === cc){
    console.log("you tied")
  } 
  else if (input === "rock" && cc === "paper") {
    console.log("you lose")
  }
  else if (input === "rock" && cc === "scissors") {
    console.log("you win")
  }
  else if (input === "paper" && cc === "rock") {
    console.log("you win")  
  } 
  else if (input === "paper" && cc === "scissors") {
    console.log("you lose")
  }
  else if (input === "scissors" && cc === "rock") {
    console.log("you lose")
  }
  else if (input === "scissors" && cc === "paper") {
    console.log("you win")
  }
    
  console.log(cc)








/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

let kilometers = parseInt(prompt("Please enter kilometers:"));
let miles = kilometers / 1.6;
console.log(miles + " Miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

let feet = parseInt(prompt("Please enter feet:"));
let centimeters = feet * 30.48;
console.log(centimeters + " centimeters ");




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

let bottles;
 for (counter = 99; counter >= 1; counter = counter - 1) 
{
     if (counter == 1) {
        bottles = 'bottle';
    } else {
        bottles = 'bottles';
    }
    console.log(counter+" "+bottles+" of soda on the wall.");
    if (counter < 99) {
        console.log("");
        console.log(counter+" "+bottles+" of soda on the wall.");
    }
    console.log(counter+" "+bottles+" of soda.");
    console.log("Take one down.");
    console.log("Pass it around.");
    if (counter == 1) {
        console.log("No bottles of soda on the wall.");
    }



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

let grade = (prompt("Please enter your grade:"));
gradeCalc(grade)

function gradeCalc(input){
  console.log("========")
  console.log(input)
  console.log("========")

  if (input >= 90)
    console.log("You have received an A")
  if (input >= 80 && input <= 89)
    console.log("You have received a B")
  if (input >= 70 && input <= 79)
    console.log("You have received a C")
  if (input >= 60 && input <= 69)
    console.log("You have received a D")
  if (input <= 59)
    console.log("You have received an F")
}



/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object
