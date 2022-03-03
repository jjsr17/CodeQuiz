// variables to keep track of quiz state
let timeLeft = 15;
var currentQuestionIndex = 0;
var correctAnswers = 0;
var wrongAnswer= 0;
var winningTime =0;

var timerEl = document.getElementById('countdown');
var startbuttonEl = document.getElementById("startbutton");
var startpageEl = document.getElementById("startpage");
var questionspageEl = document.getElementById("questionspage");
var answersdivEl = document.getElementById("answers");
var questionEl = document.getElementById("question");
var submitButtonEl = document.getElementById("submit");
var highScoreButtonEl = document.getElementById("score");
var quizEl = document.querySelector(".quiz");
var highScorePageEl = document.querySelector(".highScorePage");
var highScoreList = document.querySelector(".highScores");


var questionArr = [{question: "Commonly used data types DO NOT include: ", answers: ["strings", "booleans", "alerts", "numbers"],correctAnswer: "alerts"},
{question: "The condition in an if / else statement is enclosed within ____.  ", answers: ["quotes", "curly brackets", "parentheses", "square brackets "],correctAnswer: "parentheses"},
{question: "Arrays in JavaScript can be used to store ____.", answers: ["numbers and strings","other arrays","booleans","all of the above" ],correctAnswer: "all of the above"},
{question: "String values must be enclosed within ____ when being assigned to variables.  ", answers: ["commas","curly brackets","quotes", "parentheses"],correctAnswer: "quotes"},
{question: "A very useful tool used during development and debugging for printing content to the debugger is:", answers: ["JavaScript  terminal","/ bash","for loops", "console.log"],correctAnswer: "console.log"}];

function startQuiz(){
  startpageEl.setAttribute("class","hide-me");
  timerId = setInterval(periodicHandler,1000);
  timerEl.textContent = "time left: " + timeLeft;
  questionspageEl.removeAttribute("class");
  getNextQuestion();
}

// variables to reference DOM elements

//function to get the quiz going 
function getQuiz() {

};

      
//function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page

function getNextQuestion(){

      let currentQuestion = questionArr[currentQuestionIndex];

      if(currentQuestionIndex === questionArr.length){
        endQuiz();
      }
      questionEl.textContent = currentQuestion.question;
      answersdivEl.innerHTML = "";
      currentQuestion.answers.forEach(function(answer,idx)
      {
        let answerButton = document.createElement("button");

        answerButton.setAttribute("class","choice");
        answerButton.setAttribute("value",answer);
        answerButton.textContent = idx + 1 + "." + answer;
        answerButton.onclick = questionClick;
        answersdivEl.appendChild(answerButton);

      });    
    };
//function for the questionclick 

  //did the user guess right or wrong
  //wrong guess decreases time
  //display new time on the page
  //move to the next question
  //check if there are any questions left/you've run out
  function questionClick(event) {
    var answerClick = event.target.value;
    //did the user guess right or wrong
    console.log(event.target.value);
    console.log(questionArr[currentQuestionIndex].correctAnswer);
    if (answerClick === questionArr[currentQuestionIndex].correctAnswer){
      correctAnswers+=1;
    }else{
     // wrong guess decreases time
     wrongAnswer+=1; 
     timeLeft = timeLeft - 1;
  
   }   
    //move to the next question
    currentQuestionIndex +=1;
    getNextQuestion();
  };
  
//function to end the quiz
  //stops timer
  //shows end screen
  //shows final score
  //hides questions section
function endQuiz (){
  //timeLeft = 0;
  timerEl.textContent = "Time left: " + timeLeft;

  if(correctAnswers > wrongAnswer){

    questionEl.textContent = "You Won";
    answersdivEl.innerHTML = "";
    winningTime = timeLeft;
    //timeLeft = 0;
  }else{

    questionEl.textContent = "You Lost";
    answersdivEl.innerHTML = "";
    winningTime = timeLeft;
    //timeLeft = 0;
  }
  
};

 //function for the clock 
  //updates time
  //checks if user ran out of time 
function periodicHandler(){
    timeLeft--;
    timerEl.textContent= "time left: " + timeLeft ;
    if(timeLeft <=0){
      endQuiz().then(
        timeLeft = 0,
    )
    }
  };

//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page

  function getHighScores(){
    //do json.stringify to convert json to a string to display it on the page.

    var highScore = localStorage.getItem("highScore");
    var inputEl = document.querySelector("input");
    var user  = {
      userName: inputEl.value.trim(),
      highScore: winningTime
    };

    if (!highScore){
      highScore = [];

    } else {

      highScore = JSON.parse(highScore);

    }

    highScore.push(user);
    localStorage.setItem("highScore",JSON.stringify(highScore));
    highScore.forEach(function(scores,index){

      var listItem = document.createElement("li");
      listItem.textContent = `userName: ${scores.userName} score: ${scores.highScore}`
      
      highScoreList.appendChild(listItem)
    })
  }

  function highScorePage(){
    quizEl.setAttribute("class","hide");
    highScorePageEl.setAttribute("class","show");
    
  }

// user clicks button to submit initials
// user clicks button to start quiz
highScoreButtonEl.addEventListener("click",highScorePage);
submitButtonEl.addEventListener("click",getHighScores,{once:true});
startbuttonEl.addEventListener("click",startQuiz);