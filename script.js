const questions = [
  {
    title:
      "Lewis Hamilton won the first F1 world championship title when he raced for which team?",
    choices: ["McLaren", "Mercedes", "Red Bull", "Ford"],
    correctAnswer: "McLaren",
  },
  {
    title:
      " The title “Grand Prix” was first used for a motor race in which country?",
    choices: ["France", "Germany", "The United States", "Italy"],
    correctAnswer: "France",
  },
  {
    title:
      "What is the nickname of Ferrari – one of the most successful racing teams in F1 history?",
    choices: ["The Dancing Donkey", "The Prancing Horse", "The Prancing Pony"],
    correctAnswer: "The Prancing Horse",
  },
];
let turn = 0;
let score = 0;
//let finalScore = 0;

//display question
// shuffleQuestions();
// console.log(questions);
// function shuffleQuestions() {
//   const shuffeled = [];

//   while (questions.length) {
//     const randomIndex = Math.floor(Math.random() * questions.length);

//     const randomQuestion = questions.splice(randomIndex, 1)[0];
//     shuffeled.push(randomQuestion);
//   }
//   questions = shuffeled;
// }
function displayQuestion(que) {
  //select questions
  let question = document.querySelector("#each-question");
  question.textContent = que.title;

  //select buttons
  let choiceButtons = document.querySelectorAll(".btn");
  choiceButtons.forEach(function (button, index) {
    button.innerHTML = questions[turn].choices[index];
  });
}
//displayQuestion(questions[turn]);

// turn++
// displayQuestion(questions[turn]);

// display next Question
function nextQuestion() {
  turn++;

  if (turn < questions.length) {
    displayQuestion(questions[turn]);
  } else {
    //end the game and display score
    endGame();
    console.log("score");
  }
}
displayQuestion(questions[turn]);

function endGame() {
  let mainContent = document.querySelector(".main-content");
  mainContent.remove();

  let finalResult = document.createElement("h1");
  //win
  if (score > 2) {
    finalResult.innerHTML = " you won finalScore " + score;
    let endResult = document.querySelector(".final-score");
    endResult.appendChild(finalResult);
    console.log(endResult);
  } else {
    //loss
    finalResult.innerHTML = " you loss finalScore " + score;
    let endResult = document.querySelector(".final-score");
    endResult.appendChild(finalResult);
    console.log(endResult);
  }
}

// adding eventListeners to the button and checking if it correct
const buttons = document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log(event.target.innerHTML);

    if (questions[turn].correctAnswer === event.target.innerHTML) {
      score++;
      document.getElementById("score").innerHTML = score;
    }
    nextQuestion();
  });
});
