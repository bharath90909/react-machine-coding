import React, { useEffect, useState } from "react";
import classNames from "./quizApp.module.css";
const questionsData = [
  {
    id: 1,
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 2, // Index of "Paris"
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    choices: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 1, // Index of "Mars"
  },
  {
    id: 3,
    question: "Who wrote 'Hamlet'?",
    choices: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Leo Tolstoy",
    ],
    answer: 1, // Index of "William Shakespeare"
  },
  {
    id: 4,
    question: "What is the square root of 64?",
    choices: ["6", "7", "8", "9"],
    answer: 2, // Index of "8"
  },
  {
    id: 5,
    question: "What is the chemical symbol for water?",
    choices: ["O2", "H2", "H2O", "CO2"],
    answer: 2, // Index of "H2O"
  },
  {
    id: 6,
    question: "Who painted the Mona Lisa?",
    choices: [
      "Leonardo da Vinci",
      "Vincent van Gogh",
      "Pablo Picasso",
      "Claude Monet",
    ],
    answer: 0, // Index of "Leonardo da Vinci"
  },
  {
    id: 7,
    question: "What is the largest mammal in the world?",
    choices: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    answer: 1, // Index of "Blue Whale"
  },
  {
    id: 8,
    question: "Which is the smallest continent by land area?",
    choices: ["Africa", "Europe", "Australia", "Antarctica"],
    answer: 2, // Index of "Australia"
  },
  {
    id: 9,
    question: "What is the freezing point of water?",
    choices: ["0°C", "32°C", "100°C", "50°C"],
    answer: 0, // Index of "0°C"
  },
  {
    id: 10,
    question: "Which programming language is used for web development?",
    choices: ["Python", "JavaScript", "C++", "Swift"],
    answer: 1, // Index of "JavaScript"
  },
];

function Practice() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(15);

  function handleScore(index, questionNumber) {
    if (questionsData[questionNumber].answer === index) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 10);
    }
    questionNumber === questionsData.length - 1
      ? setShowScore(true)
      : handleNextQuestion();
  }

  function handlePrevQuestion() {
    setQuestionNumber((prev) => (prev === 0 ? 0 : prev - 1));
    setTimer(15);
  }
  function handleNextQuestion() {
    setQuestionNumber((prev) =>
      prev !== questionsData.length - 1 ? prev + 1 : prev
    );
    setTimer(15);
  }
  function handleRestart() {
    setQuestionNumber(0);
    setScore(0);
    setTimer(15);
    setShowScore(false);
  }

  useEffect(() => {
    if (timer >= 0) {
      const clock = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(clock);
    } else {
      handleNextQuestion();
    }
  }, [timer]);

  return (
    <div className={classNames.container}>
      {!showScore ? (
        <div className={classNames.quizBox}>
          <h1 className={classNames.title}>QuizApp</h1>
          <h2 className={classNames.timer}>Timer: {timer}s</h2>
          <div className={classNames.questionContainer}>
            <h1>{questionsData[questionNumber].question}</h1>
            {questionsData[questionNumber].choices.map((choice, index) => (
              <p
                key={index}
                className={classNames.choice}
                onClick={() => handleScore(index, questionNumber)}
              >
                {choice}
              </p>
            ))}
          </div>
          <div className={classNames.buttons}>
            <button className={classNames.button} onClick={handlePrevQuestion}>
              Prev
            </button>
            <button className={classNames.button} onClick={handleNextQuestion}>
              Next
            </button>
          </div>
        </div>
      ) : (
        <div className={classNames.quizBox}>
          <p className={classNames.score}>Final Score: {score}</p>
          <button className={classNames.button} onClick={handleRestart}>
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default Practice;
