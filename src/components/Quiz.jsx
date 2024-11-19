import { useState } from "react";
import QUESTIONS from "/Users/macbook/Downloads/01-starting-project 4/src/questions.js";
import quizcomp from '../assets/quiz-complete.png';

export default function Quiz() {
  // Manage the user's answers
  const [userAnswers, setUserAnswers] = useState([]);
  const activeQuestionsIndex = userAnswers.length;

    const quizIsComplete = activeQuestionsIndex === QUESTIONS.length;
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [...prevUserAnswers, selectedAnswer];
    });
  }
    if (quizIsComplete) { 
        return (
            <div id='summary'>
                <img src={quizcomp } />
                <h2>Quiz-Completed!!</h2>
           
            </div>
        )
    }
    const shuffleQuestions = [QUESTIONS[activeQuestionsIndex].answers];
    shuffleQuestions.sort(() => Math.random()-0.5);

    return (
      <div id="quiz">
    <div id="question">
      <h2>{QUESTIONS[activeQuestionsIndex].text}</h2>
      <ul id="answers">
        {QUESTIONS[activeQuestionsIndex].answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleSelectAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
            </div>
            </div>
  );
}
