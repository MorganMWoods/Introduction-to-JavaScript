/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
let votingAge = "18";
let age = "28";
if (age > votingAge) {
    console.log("True");
} else {
    console.log("False");
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let inst = "guitar";
let music = "classical";

if (music === "metal") {
    inst = "guitar";
} else if (music === "classical") {
    inst = "piano";
}
console.log(inst);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method
console.log(Number("1999"));
// console.log(Number("1999") + 1);




//Task d: Write a function to multiply a*b 
let a = 1;
let b = 2;
function mult() {
    console.log(a * b);
}
mult();




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function calc() {
    let age = 28;
    let dogAge = age * 7;
    console.log("Your age in dog years is" + " " + dogAge);
}
calc();




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

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dCalc() {
    let a = 1;
    let w = 15;
    if (a >= 1 && w <= 5) {
        console.log(w * 0.05);
    } else if (a >= 1 && w < 11) {
        console.log(w * 0.04);
    } else if (a >= 1 && w < 16) {
        console.log(w * 0.03);
    } else if (a >= 1 && w >= 16) {
        console.log(w * 0.02);
    } else if (a >= 0.16666666667 && a <= 0.33333333333) {
        console.log("Weight times .10 but it doesn't matter because peramiters have been met and no weight specs were given anyway.");
    } else if (a >= 0.33333333334 && a <= 0.58333333333) {
        console.log("Weight times .05 but it doesn't matter because peramiters have been met and no weight specs were given anyway.");
    } else {
        console.log("Weight times .04 but it doesn't matter because peramiters have been met and no weight specs were given anyway.");
    }
}

dCalc ();

// function dCalc(a, w) {
//   if (a >= 1 && w <= 5) {
//       return (w * 0.05);
//   } else if (a >= 1 && w < 11) {
//       return (w * 0.04);
//   } else if (a >= 1 && w < 16) {
//       return (w * 0.03);
//   } else if (a >= 1 && w >= 16) {
//       return (w * 0.02);
//   } else if (a < 1 && a >= 0.583) {
//      return (w * 0.04);
//   } else if (a < 0.583 && a >= 0.333) {
//       return (w * 0.05);
//   } else if (a < 0.333) {
//     return (w * 0.1); 
//   } else {
//   return "Error";
//   }
// }
// dCalc ();


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors") {
      return userInput;
    } else {
      console.log("Error.");
    }
  }
  
  
  const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3));
    switch (randomNumber) {
      case 0: 
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "This game is a tie.";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Computer wins."; 
      } else {
        return "You win.";
      }
    }
  
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Computer wins.";
      } else {
        return "You win.";
      }
    }
  
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
       return "Computer wins.";
      } else {
        return "You win.";
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("paper");
    const computerChoice = getComputerChoice();
    console.log("You threw: " + userChoice);
    console.log("The computer threw: " + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();  
  

/************************************************************** Task 5 **************************************************************/
//
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles
let kilometers = parseInt(prompt("Enter kilometers:"));
let miles = kilometers * 0.62137;
console.log(miles + " Miles");



//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
let feet = parseInt(prompt("Enter feet:"));
let cm = feet / 0.032808;
console.log(cm + " Centimeters");

  




/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
function annoyingSong() {
let num = 99;
while (num >= 1) {
    console.log(num + " bottles of soda on the wall " + num + " bottles of soda, take one down pass it around. " + (num-1) + " bottles of soda on the wall.");
    num --;
  }
}
annoyingSong();

 




/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
function random() {
let ranNum = Math.floor(Math.random() * 101);
if (ranNum > 89) {
  console.log ("A")
  return Math.floor(ranNum);

  } else if (ranNum > 79) {
  console.log ("B")
  return Math.floor(ranNum);

  } else if (ranNum > 69) {
  console.log ("C")
  return Math.floor(ranNum);

  } else if (ranNum > 59) {
  console.log ("D")
  return Math.floor(ranNum);

  } else if (ranNum <= 59) {
  console.log ("F")
  return Math.floor(ranNum);
  }
}
random();
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object



