//Hiragana Test for website
//Dictionary storing hiragana and reading
const katakanaDictionary = {
  ア: {
    romaji: "a",
    japanese: "ア"
  },
  イ: {
    romaji: "i",
    japanese: "イ"
  },
  ウ: {
    romaji: "u",
    japanese: "ウ"
  },
  エ: {
    romaji: "e",
    japanese: "エ"
  },
  オ: {
    romaji: "o",
    japanese: "オ"
  },
  カ: {
    romaji: "ka",
    japanese: "カ"
  },
  キ: {
    romaji: "ki",
    japanese: "キ"
  },
  ク: {
    romaji: "ku",
    japanese: "ク"
  },
  ケ: {
    romaji: "ke",
    japanese: "ケ"
  },
  コ: {
    romaji: "ko",
    japanese: "コ"
  },
  サ: {
    romaji: "sa",
    japanese: "サ"
  },
  シ: {
    romaji: "shi",
    japanese: "シ"
  },
  ス: {
    romaji: "su",
    japanese: "ス"
  },
  セ: {
    romaji: "se",
    japanese: "セ"
  },
  ソ: {
    romaji: "so",
    japanese: "ソ"
  },
  タ: {
    romaji: "ta",
    japanese: "タ"
  },
  チ: {
    romaji: "chi",
    japanese: "チ"
  },
  ツ: {
    romaji: "tsu",
    japanese: "ツ"
  },
  テ: {
    romaji: "te",
    japanese: "テ"
  },
  ト: {
    romaji: "to",
    japanese: "ト"
  },
  ナ: {
    romaji: "na",
    japanese: "ナ"
  },
  ニ: {
    romaji: "ni",
    japanese: "ニ"
  },
  ヌ: {
    romaji: "nu",
    japanese: "ヌ"
  },
  ネ: {
    romaji: "ne",
    japanese: "ネ"
  },
  ノ: {
    romaji: "no",
    japanese: "ノ"
  },
  ハ: {
    romaji: "ha",
    japanese: "ハ"
  },
  ヒ: {
    romaji: "hi",
    japanese: "ヒ"
  },
  フ: {
    romaji: "fu",
    japanese: "フ"
  },
  ヘ: {
    romaji: "he",
    japanese: "ヘ"
  },
  ホ: {
    romaji: "ho",
    japanese: "ホ"
  },
  マ: {
    romaji: "ma",
    japanese: "マ"
  },
  ミ: {
    romaji: "mi",
    japanese: "ミ"
  },
  ム: {
    romaji: "mu",
    japanese: "ム"
  },
  メ: {
    romaji: "me",
    japanese: "メ"
  },
  モ: {
    romaji: "mo",
    japanese: "モ"
  },
  ヤ: {
    romaji: "ya",
    japanese: "ヤ"
  },
  ユ: {
    romaji: "yu",
    japanese: "ユ"
  },
  ヨ: {
    romaji: "yo",
    japanese: "ヨ"
  },
  ラ: {
    romaji: "ra",
    japanese: "ラ"
  },
  リ: {
    romaji: "ri",
    japanese: "リ"
  },
  ル: {
    romaji: "ru",
    japanese: "ル"
  },
  レ: {
    romaji: "re",
    japanese: "レ"
  },
  ロ: {
    romaji: "ro",
    japanese: "ロ"
  },
  ワ: {
    romaji: "wa",
    japanese: "ワ"
  },
  ヲ: {
    romaji: "wo",
    japanese: "ヲ"
  },
  ン: {
    romaji: "n",
    japanese: "ン"
  },
  ガ: {
    romaji: "ga",
    japanese: "ガ"
  },
  ギ: {
    romaji: "gi",
    japanese: "ギ"
  },
  グ: {
    romaji: "gu",
    japanese: "グ"
  },
  ゲ: {
    romaji: "ge",
    japanese: "ゲ"
  },
  ゴ: {
    romaji: "go",
    japanese: "ゴ"
  },
  ザ: {
    romaji: "za",
    japanese: "ザ"
  },
  ジ: {
    romaji: "ji",
    japanese: "ジ"
  },
  ズ: {
    romaji: "zu",
    japanese: "ズ"
  },
  ゼ: {
    romaji: "ze",
    japanese: "ゼ"
  },
  ゾ: {
    romaji: "zo",
    japanese: "ゾ"
  },
  ダ: {
    romaji: "da",
    japanese: "ダ"
  },
  ヂ: {
    romaji: "ji",
    japanese: "ヂ"
  },
  ヅ: {
    romaji: "zu",
    japanese: "ヅ"
  },
  デ: {
    romaji: "de",
    japanese: "デ"
  },
  ド: {
    romaji: "do",
    japanese: "ド"
  },
  バ: {
    romaji: "ba",
    japanese: "バ"
  },
  ビ: {
    romaji: "bi",
    japanese: "ビ"
  },
  ブ: {
    romaji: "bu",
    japanese: "ブ"
  },
  ベ: {
    romaji: "be",
    japanese: "ベ"
  },
  ボ: {
    romaji: "bo",
    japanese: "ボ"
  },
  パ: {
    romaji: "pa",
    japanese: "パ"
  },
  ピ: {
    romaji: "pi",
    japanese: "ピ"
  },
  プ: {
    romaji: "pu",
    japanese: "プ"
  },
  ペ: {
    romaji: "pe",
    japanese: "ペ"
  },
  ポ: {
    romaji: "po",
    japanese: "ポ"
  },
  キャ: {
    romaji: "kya",
    japanese: "キャ"
  },
  キュ: {
    romaji: "kyu",
    japanese: "キュ"
  },
  キョ: {
    romaji: "kyo",
    japanese: "キョ"
  },
  ギャ: {
    romaji: "gya",
    japanese: "ギャ"
  },
  ギュ: {
    romaji: "gyu",
    japanese: "ギュ"
  },
  ギョ: {
    romaji: "gyo",
    japanese: "ギョ"
  },
  シャ: {
    romaji: "sha",
    japanese: "シャ"
  },
  シュ: {
    romaji: "shu",
    japanese: "シュ"
  },
  ショ: {
    romaji: "sho",
    japanese: "ショ"
  },
  ジャ: {
    romaji: "ja",
    japanese: "ジャ"
  },
  ジュ: {
    romaji: "ju",
    japanese: "ジュ"
  },
  ジョ: {
    romaji: "jo",
    japanese: "ジョ"
  },
  チャ: {
    romaji: "cha",
    japanese: "チャ"
  },
  チュ: {
    romaji: "chu",
    japanese: "チュ"
  },
  チョ: {
    romaji: "cho",
    japanese: "チョ"
  },
  ニャ: {
    romaji: "nya",
    japanese: "ニャ"
  },
  ニュ: {
    romaji: "nyu",
    japanese: "ニュ"
  },
  ニョ: {
    romaji: "nyo",
    japanese: "ニョ"
  },
  ヒャ: {
    romaji: "hya",
    japanese: "ヒャ"
  },
  ヒュ: {
    romaji: "hyu",
    japanese: "ヒュ"
  },
  ヒョ: {
    romaji: "hyo",
    japanese: "ヒョ"
  },
  ビャ: {
    romaji: "bya",
    japanese: "ビャ"
  },
  ビュ: {
    romaji: "byu",
    japanese: "ビュ"
  },
  ビョ: {
    romaji: "byo",
    japanese: "ビョ"
  },
  ピャ: {
    romaji: "pya",
    japanese: "ピャ"
  },
  ピュ: {
    romaji: "pyu",
    japanese: "ピュ"
  },
  ピョ: {
    romaji: "pyo",
    japanese: "ピョ"
  },
  ミャ: {
    romaji: "mya",
    japanese: "ミャ"
  },
  ミュ: {
    romaji: "myu",
    japanese: "ミュ"
  },
  ミョ: {
    romaji: "myo",
    japanese: "ミョ"
  },
  リャ: {
    romaji: "rya",
    japanese: "リャ"
  },
  リュ: {
    romaji: "ryu",
    japanese: "リュ"
  },
  リョ: {
    romaji: "ryo",
    japanese: "リョ"
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
const guessedKatakana = []
const keys = Object.keys(katakanaDictionary);
// global variables that will be modified throghout code
var katakanaToGuess = "";
var count = 0;
var grade = 0;
//funtion that checks if the random letter generated has already been used or not by checking guessedHirgana array
function checkRepeat(katakana){
  if(guessedKatakana.includes(katakana)){
    return true
  }
  else{
    return false
  }
  }
//function that generates a random hiragana from dictionary and then checks for repeat with previous function.
function randomKatakana(){
  var randomKey = keys[Math.floor(Math.random() * keys.length)];
  var randomK = katakanaDictionary[randomKey].japanese;
    while (checkRepeat(randomK)) {
      randomK = randomKatakana();
    }
    return randomK
}
// function that inputs the hiragana into HTML
function input(katakana) {
  TG.innerHTML = katakana;
}
// pulls answer from textbox and compares to romaji key of dictionary and responds accordingly
function checkGuess(katakana){
  const romaji = katakanaDictionary[katakana].romaji;
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
      titles[i].innerHTML = "Katakana All Test Score";
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
  var katakana = randomKatakana();
  guessedKatakana.push(katakana);
  input(katakana);
  katakanaToGuess = katakana
  startid.disabled = true;
  nextid.disabled = true;
}
// when submit button pressed it checks the guess and checks for the end of test
function submit(){
  count +=1
  checkGuess(katakanaToGuess)
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