const chalk = require('chalk')
var readLineSync = require("readline-sync")
var username = readLineSync.question("What is your name? ")
console.log(chalk.yellow("Welcome harshitha's friend: " + username ))
console.log(chalk.magentaBright("Lets play a quiz"))

var score=0;

function play(question, answer) {
  var userAnswer = readLineSync.question(chalk.green(question));
  if(userAnswer.toLowerCase() === answer.toLowerCase()) {
  console.log(chalk.green("You're right!!"));
  console.log("--------------")
  score = score + 1
  }
else{
  console.log(chalk.red("You're wrong!!"))
  console.log("--------------")
  }
}


var questionOne = {
  question:"where do harshitha live ? ",
  answer:"Vijayawada",
  }

var questionTwo = { 
  question:"What is harshitha's favorite color? ",
  answer:"Black",
}

var questionThree= {
  question:"What is harshitha's favourite hobby?",
  answer: "Badminton",
}
var questionFour = { 
  question:"When is harshitha's birthday? ",
  answer:"7 february",
}

var questionFive= {
  question:"Where do harshitha study?",
  answer: "dehradun",
}
var questionList = [questionOne, questionTwo, questionThree,questionFour,questionFive]

for(i=0; i<questionList.length; i++) {
  currentQuestion = questionList[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log(chalk.cyan("Your Score is: " + score))

