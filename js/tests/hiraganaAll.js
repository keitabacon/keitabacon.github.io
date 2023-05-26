//Hiragana Test for website
//Dictionary storing hiragana and reading
const hiraganaDictionary = {
  あ: {
    romaji: "a",
    japanese: "あ"
  },
  い: {
    romaji: "i",
    japanese: "い"
  },
  う: {
    romaji: "u",
    japanese: "う"
  },
  え: {
    romaji: "e",
    japanese: "え"
  },
  お: {
    romaji: "o",
    japanese: "お"
  },
  か: {
    romaji: "ka",
    japanese: "か"
  },
  き: {
    romaji: "ki",
    japanese: "き"
  },
  く: {
    romaji: "ku",
    japanese: "く"
  },
  け: {
    romaji: "ke",
    japanese: "け"
  },
  こ: {
    romaji: "ko",
    japanese: "こ"
  },
  さ: {
    romaji: "sa",
    japanese: "さ"
  },
  し: {
    romaji: "shi",
    japanese: "し"
  },
  す: {
    romaji: "su",
    japanese: "す"
  },
  せ: {
    romaji: "se",
    japanese: "せ"
  },
  そ: {
    romaji: "so",
    japanese: "そ"
  },
  た: {
    romaji: "ta",
    japanese: "た"
  },
  ち: {
    romaji: "chi",
    japanese: "ち"
  },
  つ: {
    romaji: "tsu",
    japanese: "つ"
  },
  て: {
    romaji: "te",
    japanese: "て"
  },
  と: {
    romaji: "to",
    japanese: "と"
  },
  な: {
    romaji: "na",
    japanese: "な"
  },
  に: {
    romaji: "ni",
    japanese: "に"
  },
  ぬ: {
    romaji: "nu",
    japanese: "ぬ"
  },
  ね: {
    romaji: "ne",
    japanese: "ね"
  },
  の: {
    romaji: "no",
    japanese: "の"
  },
  は: {
    romaji: "ha",
    japanese: "は"
  },
  ひ: {
    romaji: "hi",
    japanese: "ひ"
  },
  ふ: {
    romaji: "fu",
    japanese: "ふ"
  },
  へ: {
    romaji: "he",
    japanese: "へ"
  },
  ほ: {
    romaji: "ho",
    japanese: "ほ"
  },
  ま: {
    romaji: "ma",
    japanese: "ま"
  },
  み: {
    romaji: "mi",
    japanese: "み"
  },
  む: {
    romaji: "mu",
    japanese: "む"
  },
  め: {
    romaji: "me",
    japanese: "め"
  },
  も: {
    romaji: "mo",
    japanese: "も"
  },
  や: {
    romaji: "ya",
    japanese: "や"
  },
  ゆ: {
    romaji: "yu",
    japanese: "ゆ"
  },
  よ: {
    romaji: "yo",
    japanese: "よ"
  },
  ら: {
    romaji: "ra",
    japanese: "ら"
  },
  り: {
    romaji: "ri",
    japanese: "り"
  },
  る: {
    romaji: "ru",
    japanese: "る"
  },
  れ: {
    romaji: "re",
    japanese: "れ"
  },
  ろ: {
    romaji: "ro",
    japanese: "ろ"
  },
  わ: {
    romaji: "wa",
    japanese: "わ"
  },
  を: {
    romaji: "wo",
    japanese: "を"
  },
  ん: {
    romaji: "n",
    japanese: "ん"
  },
  が: {
    romaji: "ga",
    japanese: "が"
  },
  ぎ: {
    romaji: "gi",
    japanese: "ぎ"
  },
  ぐ: {
    romaji: "gu",
    japanese: "ぐ"
  },
  げ: {
    romaji: "ge",
    japanese: "げ"
  },
  ご: {
    romaji: "go",
    japanese: "ご"
  },
  ざ: {
    romaji: "za",
    japanese: "ざ"
  },
  じ: {
    romaji: "ji",
    japanese: "じ"
  },
  ず: {
    romaji: "zu",
    japanese: "ず"
  },
  ぜ: {
    romaji: "ze",
    japanese: "ぜ"
  },
  ぞ: {
    romaji: "zo",
    japanese: "ぞ"
  },
  だ: {
    romaji: "da",
    japanese: "だ"
  },
  ぢ: {
    romaji: "ji",
    japanese: "ぢ"
  },
  づ: {
    romaji: "zu",
    japanese: "づ"
  },
  で: {
    romaji: "de",
    japanese: "で"
  },
  ど: {
    romaji: "do",
    japanese: "ど"
  },
  ば: {
    romaji: "ba",
    japanese: "ば"
  },
  び: {
    romaji: "bi",
    japanese: "び"
  },
  ぶ: {
    romaji: "bu",
    japanese: "ぶ"
  },
  べ: {
    romaji: "be",
    japanese: "べ"
  },
  ぼ: {
    romaji: "bo",
    japanese: "ぼ"
  },
  ぱ: {
    romaji: "pa",
    japanese: "ぱ"
  },
  ぴ: {
    romaji: "pi",
    japanese: "ぴ"
  },
  ぷ: {
    romaji: "pu",
    japanese: "ぷ"
  },
  ぺ: {
    romaji: "pe",
    japanese: "ぺ"
  },
  ぽ: {
    romaji: "po",
    japanese: "ぽ"
  },
  きゃ: {
    romaji: "kya",
    japanese: "きゃ"
  },
  きゅ: {
    romaji: "kyu",
    japanese: "きゅ"
  },
  きょ: {
    romaji: "kyo",
    japanese: "きょ"
  },
  ぎゃ: {
    romaji: "gya",
    japanese: "ぎゃ"
  },
  ぎゅ: {
    romaji: "gyu",
    japanese: "ぎゅ"
  },
  ぎょ: {
    romaji: "gyo",
    japanese: "ぎょ"
  },
  しゃ: {
    romaji: "sha",
    japanese: "しゃ"
  },
  しゅ: {
    romaji: "shu",
    japanese: "しゅ"
  },
  しょ: {
    romaji: "sho",
    japanese: "しょ"
  },
  じゃ: {
    romaji: "ja",
    japanese: "じゃ"
  },
  じゅ: {
    romaji: "ju",
    japanese: "じゅ"
  },
  じょ: {
    romaji: "jo",
    japanese: "じょ"
  },
  ちゃ: {
    romaji: "cha",
    japanese: "ちゃ"
  },
  ちゅ: {
    romaji: "chu",
    japanese: "ちゅ"
  },
  ちょ: {
    romaji: "cho",
    japanese: "ちょ"
  },
  にゃ: {
    romaji: "nya",
    japanese: "にゃ"
  },
  にゅ: {
    romaji: "nyu",
    japanese: "にゅ"
  },
  にょ: {
    romaji: "nyo",
    japanese: "にょ"
  },
  ひゃ: {
    romaji: "hya",
    japanese: "ひゃ"
  },
  ひゅ: {
    romaji: "hyu",
    japanese: "ひゅ"
  },
  ひょ: {
    romaji: "hyo",
    japanese: "ひょ"
  },
  びゃ: {
    romaji: "bya",
    japanese: "びゃ"
  },
  びゅ: {
    romaji: "byu",
    japanese: "びゅ"
  },
  びょ: {
    romaji: "byo",
    japanese: "びょ"
  },
  ぴゃ: {
    romaji: "pya",
    japanese: "ぴゃ"
  },
  ぴゅ: {
    romaji: "pyu",
    japanese: "ぴゅ"
  },
  ぴょ: {
    romaji: "pyo",
    japanese: "ぴょ"
  },
  みゃ: {
    romaji: "mya",
    japanese: "みゃ"
  },
  みゅ: {
    romaji: "myu",
    japanese: "みゅ"
  },
  みょ: {
    romaji: "myo",
    japanese: "みょ"
  },
  りゃ: {
    romaji: "rya",
    japanese: "りゃ"
  },
  りゅ: {
    romaji: "ryu",
   
}}
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
const guessedHiragana = []
const keys = Object.keys(hiraganaDictionary);
// global variables that will be modified throghout code
var HirganaToGuess = "";
var count = 0;
var grade = 0;
//funtion that checks if the random letter generated has already been used or not by checking guessedHirgana array
function checkRepeat(hiragana){
  if(guessedHiragana.includes(hiragana)){
    return true
  }
  else{
    return false
  }
  }
//function that generates a random hiragana from dictionary and then checks for repeat with previous function.
function randomHiragana(){
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomH = hiraganaDictionary[randomKey].japanese;
    while (checkRepeat(randomH)) {
      randomH = randomHiragana();
    }
    return randomH
}
// function that inputs the hiragana into HTML
function input(hiragana) {
  TG.innerHTML = hiragana;
}
// pulls answer from textbox and compares to romaji key of dictionary and responds accordingly
function checkGuess(hiragana){
  const romaji = hiraganaDictionary[hiragana].romaji;
  if(answer.value.toLowerCase() == romaji){
    console.log("correct!")
    grade +=1
    result.innerHTML = "Correct! "+ grade +"/"+count
    result.style.color = "green";
  }
  else{
    console.log("incorrect")
    result.innerHTML = "Incorrect: "+romaji+" "+ grade +"/"+count;
    result.style.color = "red";
  }
  }
// function that checks for the end of the test by looking at the count and deleting class by iterating through and deleting children.
function endOfTest(){
  if(count==107){
    while (testContainers.length > 0) {
     testContainers[0].parentNode.removeChild(testContainers[0]);
    }
    while (startButtons.length > 0) {
      startButtons[0].parentNode.removeChild(startButtons[0]);
    }
    for (var i = 0; i < titles.length; i++) {
      titles[i].innerHTML = "Hiragana All Test Score";
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
  var hiragana = randomHiragana();
  guessedHiragana.push(hiragana);
  input(hiragana);
  HirganaToGuess = hiragana
  startid.disabled = true;
  nextid.disabled = true;
}
// when submit button pressed it checks the guess and checks for the end of test
function submit(){
  count +=1
  checkGuess(HirganaToGuess)
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