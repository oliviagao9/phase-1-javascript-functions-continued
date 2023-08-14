// code your solution here
/*
const fn = function () {
  console.log("Yet more razzling");
}; //=> undefined
fn; //=> ƒ () { console.log("Yet more razzling") }
fn(); // "Yet more razzling"

LAB: Implement a function expression called mondayWork.
 The function should return a String like "This Monday, I will ... ." Fill in the ... with the activity that's passed in as the first parameter. 
 If nothing is passed in, default to "go to the office". Run npm test to verify you've gotten this set of tests passing before continuing with the lesson.

1. create a function expression called mondayWork
2. return a string "This Monday, I will... ."
3. fill in an activiy, default to "go to the office"

*/
function saturdayFun (activity = 'roller-skate') {

    return `This Saturday, I want to ${activity}!`;

}

const mondayWork = function (activity = 'go to the office') {

    return `This Monday, I will ${activity}.`;

}

/*
1. create a function wrapAdjective
2. create a inner function named anything that has a single parameter default to "special"
3. the inner function should return a string "You are...!"

*/

function wrapAdjective (flair = "*") {
    
    return function (characteristic = "special") {

        return `You are ${flair}${characteristic}${flair}!`;

    }
}
