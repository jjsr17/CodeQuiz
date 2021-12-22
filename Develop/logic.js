// variables to keep track of quiz state
let timeLeft = 75;
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
var questionArr = [{question: "Commonly used data types DO NOT include: ", answers: ["strings", "booleans", "alerts", "numbers"],correctAnswer: "alerts"},
{question: "The condition in an if / else statement is enclosed within ____.  ", answers: ["quotes", "curly brackets", "parentheses", "square brackets "],correctAnswer: "parentheses"},
{question: "Arrays in JavaScript can be used to store ____.", answers: ["numbers and strings","other arrays","booleans","all of the above" ],correctAnswer: "all of the above"},
{question: "String values must be enclosed within ____ when being assigned to variables.  ", answers: ["commas","curly brackets","quotes", "parentheses"],correctAnswer: "quotes"},
{question: "A very useful tool used during development and debugging for printing content to the debugger is:", answers: ["JavaScript  terminal","/ bash","for loops", "console.log"],correctAnswer: "console.log"}];


      
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
      questionEl.textContent = currentQuestion.question;
      answersdivEl.innerHTML = "";
      currentQuestion.answers.forEach(function(answer,idx)
      {
        let answerButton = document.createElement("button");
        answerButton.setAttribute("class","choice");
        answerButton.setAttribute("value",answer);
        answerButton.textContent = idx + 1 + ". " + answer;
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
  function questionClick (){
  
    //did the user guess right or wrong
    //if (questionArr[answers] === questionArr[correctAnswer]){
  
    //}else{
      //wrong guess decreases time
      //timeLeft = timeLeft - 6;
      
    //}
    
    //move to the next question


  };
  
//function to end the quiz
  //stops timer
  //shows end screen
  //shows final score
  //hides questions section
function endQuiz (){
  timeLeft = 0;
  timerEl.textContent = "Time left: " + timeLeft;

};
 //function for the clock 
  //updates time
  //checks if user ran out of time 
  function periodicHandler(){
    timeLeft--;
    timerEl.textContent= "time left: " + timeLeft ;
    if(timeLeft <=0){
      endQuiz();
    }
  };
//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page

// user clicks button to submit initials


// user clicks button to start quiz
function startQuiz(){
  startpageEl.setAttribute("class","hide-me");
  timerId = setInterval(periodicHandler,1000);
  timerEl.textContent = "time left: " + timeLeft;
  questionspageEl.removeAttribute("class");
  getNextQuestion();
}

startbuttonEl.addEventListener("click",startQuiz)