// variables to keep track of quiz state
let isQuiz = " ";
let timeLeft = 75;
let flag = true;
var timerId;

var timerEl = document.getElementById('countdown');
var startbuttonEl = document.getElementById("startbutton");
var startpageEl = document.getElementById("startpage");
var currentQuestionIndex = 0;
var questionspageEl = document.getElementById("questionspage");
var answersdivEl = document.getElementById("answers");
var questionEl = document.getElementById("question");


// variables to reference DOM elements


//function to get the quiz going 
function getQuiz() {

};
var arr = [{question: "Commonly used data types DO NOT include: ", answers: ["strings", "booleans", "alerts", "numbers"],correctAnswer: "alerts"},
{question: "Commonly used data types DO NOT include: ", answers: ["strings", "booleans", "alerts", "numbers"],correctAnswer: "alerts"},
{question: "Commonly used data types DO NOT include: ", answers: ["strings", "booleans", "alerts", "numbers"],correctAnswer: "alerts"},
{question: "Commonly used data types DO NOT include: ", answers: ["strings", "booleans", "alerts", "numbers"],correctAnswer: "alerts"}];


      
//function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page
function pullQuestion (){

    };

//function for the questionclick 

  //did the user guess right or wrong
  //wrong guess decreases time
  //display new time on the page
  //move to the next question
  //check if there are any questions left/you've run out
  function questionclick (){
    if (result === true){


    }else{
      timeLeft -= 6;
      
    }


  };
  
//function to end the quiz
  //stops timer
  //shows end screen
  //shows final score
  //hides questions section
function endQuiz (){

};
 //function for the clock 
  //updates time
  //checks if user ran out of time 

//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page
function highScore (){
  if(inputbox != 0){

  }


};

// user clicks button to submit initials
function periodicHandler(){
  timeLeft--;
  timerEl.textContent= "time left: " + timeLeft ;
  if(timeLeft <=0){
    endQuiz();
  }
};

function userClick(){
  //to be done
}

function getNextQuestion(){
  let currentQuestion = arr[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  answersdivEl.innerHTML = "";
  currentQuestion.answers.forEach(function(answer,idx)
  {
    let answerButton = document.createElement("button");
    answerButton.setAttribute("class","choice");
    answerButton.setAttribute("value",answer);
    answerButton.textContent = idx +1 +". " + answer;
    answerButton.onclick = userClick;
    answersdivEl.appendChild(answerButton);
  });

};
// user clicks button to start quiz
function startQuiz(){
  startpageEl.setAttribute("class","hide-me");
  timerId = setInterval(periodicHandler,1000);
  timerEl.textContent = "time left: " + timeLeft;
  questionspageEl.removeAttribute("class");
  getNextQuestion();
}

//countdown();
startbuttonEl.addEventListener("click",startQuiz)