//Hiragana Test for website
//Dictionary storing hiragana and reading
const kanjiDictionary = {
  月: {
    romaji: "tsuki",
    japanese: "月"
  },
  上: {
    romaji: "ue",
    japanese: "上"
  },
  下: {
    romaji: "shita",
    japanese: "下"
  },
  火: {
    romaji: "hi",
    japanese: "火"
  },
  水: {
    romaji: "mizu",
    japanese: "水"
  },
  木: {
    romaji: "ki",
    japanese: "木"
  },
  金: {
    romaji: "kane",
    japanese: "金"
  },
  土: {
    romaji: "tsuchi",
    japanese: "土"
  },
  日: {
    romaji: "hi/nichi",
    japanese: "日"
  },
  一: {
    romaji: "ichi",
    japanese: "一"
  },
  二: {
    romaji: "ni",
    japanese: "二"
  },
  三: {
    romaji: "san",
    japanese: "三"
  },
  四: {
    romaji: "shi",
    japanese: "四"
  },
  五: {
    romaji: "go",
    japanese: "五"
  },
  六: {
    romaji: "roku",
    japanese: "六"
  },
  七: {
    romaji: "shichi/nana",
    japanese: "七"
  },
  八: {
    romaji: "hachi",
    japanese: "八"
  },
  九: {
    romaji: "kyu",
    japanese: "九"
  },
  十: {
    romaji: "ju",
    japanese: "十"
  },
  百: {
    romaji: "hyaku",
    japanese: "百"
  },
  千: {
    romaji: "sen",
    japanese: "千"
  },
  色: {
    romaji: "iro",
    japanese: "色"
  },
  分: {
    romaji: "bun",
    japanese: "分"
  },
  年: {
    romaji: "nen",
    japanese: "年"
  },
  赤: {
    romaji: "aka",
    japanese: "赤"
  },
  青: {
    romaji: "ao",
    japanese: "青"
  },
  人: {
    romaji: "hito",
    japanese: "人"
  },
  時: {
    romaji: "ji",
    japanese: "時"
  },
  中: {
    romaji: "naka",
    japanese: "中"
  },
  大: {
    romaji: "dai",
    japanese: "大"
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
const guessedKanji = []
const keys = Object.keys(kanjiDictionary);
// global variables that will be modified throghout code
var kanjiToGuess = "";
var count = 0;
var grade = 0;
//funtion that checks if the random letter generated has already been used or not by checking guessedHirgana array
function checkRepeat(kanji){
  if(guessedKanji.includes(kanji)){
    return true
  }
  else{
    return false
  }
  }
//function that generates a random hiragana from dictionary and then checks for repeat with previous function.
function randomKanji(){
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomK = kanjiDictionary[randomKey].japanese;
    while (checkRepeat(randomK)) {
      randomK = randomKanji();
    }
    return randomK
}
// function that inputs the hiragana into HTML
function input(kanji) {
  TG.innerHTML = kanji;
}
// pulls answer from textbox and compares to romaji key of dictionary and responds accordingly
function checkGuess(kanji){
  const romaji = kanjiDictionary[kanji].romaji;
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
  if(count==15){
    while (testContainers.length > 0) {
     testContainers[0].parentNode.removeChild(testContainers[0]);
    }
    while (startButtons.length > 0) {
      startButtons[0].parentNode.removeChild(startButtons[0]);
    }
    for (var i = 0; i < titles.length; i++) {
      titles[i].innerHTML = "Kanji Test Score";
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
  var kanji = randomKanji();
  guessedKanji.push(kanji);
  input(kanji);
  kanjiToGuess = kanji
  startid.disabled = true;
  nextid.disabled = true;
}
// when submit button pressed it checks the guess and checks for the end of test
function submit(){
  count +=1
  checkGuess(kanjiToGuess)
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