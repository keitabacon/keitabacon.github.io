//Hiragana Test for website
//Dictionary storing hiragana and reading
const hiraganaWordsDictionary = {
  ねずみ: {
    japanese: "ねずみ",
    english: "mouse"
  },
  うし: {
    japanese: "うし",
    english: "cow"
  },
  とら: {
    japanese: "とら",
    english: "tiger"
  },
  うさぎ: {
    japanese: "うさぎ",
    english: "rabbit"
  },
  りゅう: {
    japanese: "りゅう",
    english: "dragon"
  },
  へび: {
    japanese: "へび",
    english: "snake"
  },
  うま: {
    japanese: "うま",
    english: "horse"
  },
  ひつじ: {
    japanese: "ひつじ",
    english: "sheep"
  },
  さる: {
    japanese: "さる",
    english: "monkey"
  },
  にわとり: {
    japanese: "にわとり",
    english: "chicken"
  },
  いぬ: {
    japanese: "いぬ",
    english: "Dog"
  },
  いのしし: {
    japanese: "いのしし",
    english: "Boar"
  },
  ねこ: {
    japanese: "ねこ",
    english: "Cat"
  },
  すし: {
    japanese: "すし",
    english: "Sushi"
  },
  うどん: {
    japanese: "うどん",
    english: "udon"
  },
  そば: {
    japanese: "そば",
    english: "soba"
  },
  みず: {
    japanese: "みず",
    english: "water"
  },
  おちゃ: {
    japanese: "おちゃ",
    english: "tea"
  },
  ごはん: {
    japanese: "ごはん",
    english: "rice"
  },
  いえ: {
    japanese: "いえ",
    english: "house"
  },
  えき: {
    japanese: "えき",
    english: "train"
  },
  がっこう: {
    japanese: "がっこう",
    english: "school"
  },
  せんせい: {
    japanese: "せんせい",
    english: "teacher"
  },
  せいと: {
    japanese: "せいと",
    english: "student"
  },
  とけい: {
    japanese: "とけい",
    english: "clock"
  },
  でんわ: {
    japanese: "でんわ",
    english: "phone"
  },
  さいふ: {
    japanese: "さいふ",
    english: "wallet"
  },
  にほん: {
    japanese: "にほん",
    english: "japan"
  },
  とうきょう: {
    japanese: "とうきょう",
    english: "tokyo"
  },
  とうふ: {
    japanese: "とうふ",
    english: "tofu"
  },
}
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
const guessedWord = []
const keys = Object.keys(hiraganaWordsDictionary);
// global variables that will be modified throghout code
var wordToGuess = "";
var count = 0;
var grade = 0;
//funtion that checks if the random letter generated has already been used or not by checking guessedHirgana array
function checkRepeat(word){
  if(guessedWord.includes(word)){
    return true
  }
  else{
    return false
  }
  }
//function that generates a random hiragana from dictionary and then checks for repeat with previous function.
function randomWord(){
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomW = hiraganaWordsDictionary[randomKey].japanese;
    while (checkRepeat(randomW)) {
      randomW = randomWord();
    }
    return randomW
}
// function that inputs the hiragana into HTML
function input(word) {
  TG.innerHTML = word;
}
// pulls answer from textbox and compares to romaji key of dictionary and responds accordingly
function checkGuess(word){
  const english = hiraganaWordsDictionary[word].english;
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
  if(count==30){
    while (testContainers.length > 0) {
     testContainers[0].parentNode.removeChild(testContainers[0]);
    }
    while (startButtons.length > 0) {
      startButtons[0].parentNode.removeChild(startButtons[0]);
    }
    for (var i = 0; i < titles.length; i++) {
      titles[i].innerHTML = "Hiragana Words Test Score";
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
  var word = randomWord();
  guessedWord.push(word);
  input(word);
  wordToGuess = word
  startid.disabled = true;
  nextid.disabled = true;
}
// when submit button pressed it checks the guess and checks for the end of test
function submit(){
  count +=1
  checkGuess(wordToGuess)
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