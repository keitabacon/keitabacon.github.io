//Katakana words Test for website
//Dictionary storing words and reading
const katakanaWordsDictionary = {
  アメリカ: {
    japanese: "アメリカ",
    english: "america"
  },
  インド: {
    japanese: "インド",
    english: "india"
  },
  スイス: {
    japanese: "スイス",
    english: "switzerland"
  },
  ドイツ: {
    japanese: "ドイツ",
    english: "germany"
  },
  フランス: {
    japanese: "フランス",
    english: "france"
  },
  スペイン: {
    japanese: "スペイン",
    english: "spain"
  },
  イギリス: {
    japanese: "イギリス",
    english: "united kingdom"
  },
  メキシコ: {
    japanese: "メキシコ",
    english: "mexico"
  },
  カナダ: {
    japanese: "カナダ",
    english: "canada"
  },
  ニューヨーク: {
    japanese: "ニューヨーク",
    english: "new york"
  },
  テキサス: {
    japanese: "テキサス",
    english: "texas"
  },
  オレゴン: {
    japanese: "オレゴン",
    english: "oregon"
  },
  パスタ: {
    japanese: "パスタ",
    english: "pasta"
  },
  ジュース: {
    japanese: "ジュース",
    english: "juice"
  },
  ピザ: {
    japanese: "ピザ",
    english: "pizza"
  },
  ラーメン: {
    japanese: "ラーメン",
    english: "ramen"
  },
  パン: {
    japanese: "パン",
    english: "bread"
  },
  ケーキ: {
    japanese: "ケーキ",
    english: "cake"
  },
  ロシア: {
    japanese: "ロシア",
    english: "russia"
  },
  コンピューター: {
    japanese: "コンピューター",
    english: "computer"
  },
  ペン: {
    japanese: "ペン",
    english: "pen"
  },
  ピアノ: {
    japanese: "ピアノ",
    english: "piano"
  },
  プール: {
    japanese: "プール",
    english: "pool"
  },
  スプーン: {
    japanese: "スプーン",
    english: "spoon"
  },
  ソファ: {
    japanese: "ソファ",
    english: "sofa"
  },
  ニュース: {
    japanese: "ニュース",
    english: "news"
  },
  ロンドン: {
    japanese: "ロンドン",
    english: "london"
  },
  パリ: {
    japanese: "パリ",
    english: "paris"
  },
  テーブル: {
    japanese: "テーブル",
    english: "table"
  },
  テレビ: {
    japanese: "テレビ",
    english: "television"
  },
  スターバックス: {
    japanese: "スターバックス",
    english: "starbucks"
  },
  マクドナルド: {
    japanese: "マクドナルド",
    english: "mcdonald"
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
const guessedWord = []
const keys = Object.keys(katakanaWordsDictionary);
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
  var randomW = katakanaWordsDictionary[randomKey].japanese;
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
  const english = katakanaWordsDictionary[word].english;
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
      titles[i].innerHTML = "Katakana Words Test Score";
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