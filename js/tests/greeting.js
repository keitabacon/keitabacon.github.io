//Greetings Test for website
//Dictionary storing greetings and reading
const greetingDictionary = {
  おはようございます: {
    japanese: "おはようございます",
    english: "good morning"
  },
  こんにちは: {
    japanese: "こんにちは",
    english: "hello"
  },
  こんばんは: {
    japanese: "こんばんは",
    english: "good evening"
  },
  はじめまして: {
    japanese: "はじめまして",
    english: "nice to meet you"
  },
  おやすみなさい: {
    japanese: "おやすみなさい",
    english: "good night"
  },
  さようなら: {
    japanese: "さようなら",
    english: "goodbye"
  },
  すみません: {
    japanese: "すみません",
    english: "excuse me"
  },
  いらっしゃいませ: {
    japanese: "いらっしゃいませ",
    english: "welcome"
  },
  ありがとうございます: {
    japanese: "ありがとうございます",
    english: "thank you"
  },
  いただきます: {
    japanese: "いただきます",
    english: "thank you for the meal"
  }
};
//get Element by ID's/class
const answer = document.getElementById('answer');
const nextid = document.getElementById("next");
const result = document.getElementById("result");
const startid = document.getElementById("start");
const submitid = document.getElementById("submit");
const TG = document.getElementById("TG");
const insts = document.getElementsByClassName('inst');
const startButtons = document.getElementsByClassName('startbutton');
const testContainers = document.getElementsByClassName("test__container");
const titles = document.getElementsByClassName('title');
//other Consts to be used
const guessedGreeting = []
const keys = Object.keys(greetingDictionary);
// global variables that will be modified throghout code
var greetingToGuess = "";
var count = 0;
var grade = 0;
//funtion that checks if the random letter generated has already been used or not by checking guessedHirgana array
function checkRepeat(greeting){
  if(guessedGreeting.includes(greeting)){
    return true
  }
  else{
    return false
  }
  }
//function that generates a random hiragana from dictionary and then checks for repeat with previous function.
function randomGreeting(){
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomG = greetingDictionary[randomKey].japanese;
    while (checkRepeat(randomG)) {
      randomG = randomGreeting();
    }
    return randomG
}
// function that inputs the hiragana into HTML
function input(greeting) {
  TG.innerHTML = greeting;
}
// pulls answer from textbox and compares to romaji key of dictionary and responds accordingly
function checkGuess(greeting){
  const english = greetingDictionary[greeting].english;
  if(answer.value.toLowerCase() == english){
    console.log("correct!")
    grade +=1
    result.innerHTML = "Correct! "+ grade +"/"+count
    result.style.color = "green";
  }
  else{
    console.log("incorrect")
    result.innerHTML = "Incorrect: "+english+" "+ grade +"/"+count;
    result.style.color = "red";
  }
  }
// function that checks for the end of the test by looking at the count and deleting class by iterating through and deleting children.
function endOfTest(){
  if(count==10){
    while (testContainers.length > 0) {
     testContainers[0].parentNode.removeChild(testContainers[0]);
    }
    while (startButtons.length > 0) {
      startButtons[0].parentNode.removeChild(startButtons[0]);
    }
    for (var i = 0; i < titles.length; i++) {
      titles[i].innerHTML = "Greeting Test Score";
    }
    for (var i = 0; i < insts.length; i++) {
      insts[i].innerHTML = "Congratulations! You are done with the test. <br> Your score is: " + grade + "/" + count;
    }
  }
}
// start function that intiates randomHiragana, inputs it, and disables unneeded buttons
function start(){
  if (testContainers.length > 0) {
    testContainers[0].style.visibility = "visible";
  }
  var greeting = randomGreeting();
  guessedGreeting.push(greeting);
  input(greeting);
  greetingToGuess = greeting
  startid.disabled = true;
  nextid.disabled = true;
}
// when submit button pressed it checks the guess and checks for the end of test
function submit(){
  count +=1
  checkGuess(greetingToGuess)
  endOfTest()
  submitid.disabled = true;
  nextid.disabled = false;
}
// next function does the start function and resets the the text and buttons for the next question
function next(){
  start()
  answer.value = "";
  submitid.disabled = false;
  result.innerHTML = "Result";
  result.style.color = "black";
  nextid.disabled = true;
}