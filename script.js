let questions = [
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
    choices: [
      "The Dancing Donkey",
      "The Prancing Horse",
      "The Prancing Pony",
      "Silver Arrows",
    ],
    correctAnswer: "The Prancing Horse",
  },
  {
    title: "Which movie was made about Niki Lauda’s racing career?",
    choices: ["Crash", "Rush", "Champion", "Ford vs Ferrari"],
    correctAnswer: "Rush",
  },
  {
    title: "Which driver won the first ever F1 world championship title?",
    choices: [
      "Juan Manuel Fangio",
      "Alberto Ascari",
      "Giuseppe Farina",
      "Tazio Nuvolari",
    ],
    correctAnswer: "Giuseppe Farina",
  },
  {
    title:
      "Ford provided engines to F1 for many years before forming its own team in 2000 under the name of which subsidiary marques?",
    choices: ["Mazda", "Volvo", "Jaguar", "Ford"],
    correctAnswer: "Jaguar",
  },
  {
    title:
      " Which circuit held the first race of the French Grand Prix in 1950?",
    choices: ["Reims", "Paul Ricard", " Magny Cours", "Le Mans"],
    correctAnswer: "Reims",
  },
];
let turn = 0;
let score = 0;

const audio = document.querySelector("audio");


//display question
shuffleQuestions();
function shuffleQuestions() {
  const shuffeled = [];

  while (questions.length) {
    const randomIndex = Math.floor(Math.random() * questions.length);

    const randomQuestion = questions.splice(randomIndex, 1)[0];
    shuffeled.push(randomQuestion);
  }
  questions = shuffeled;
}

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
  if (score >= 4) {
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

// adding eventListeners
const buttons = document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", function (event) {
    console.log(event.target.innerHTML);

    if (questions[turn].correctAnswer === event.target.innerHTML) {
      score++;
      document.getElementById("score").innerHTML = score;
    }

    setTimeout(audio.play(), 200);
    setTimeout(() => {
      audio.pause();
      audio.currentTime = 0;
    }, 3000);
  

    nextQuestion();
  });
});
