import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./QuizJoinner.scss";

const QuizJoinner = () => {

  const [quizCode, setQuizCode] = useState("");
  const navigate = useNavigate();

  const [foundQuiz, setFoundQuiz] = useState(false);

  const handleJoinQuiz = () => {
    // TODO: Fetch quiz data using quizCode and navigate to the quiz page
    try{
      navigate("/quiz", {state: {quizCode:quizCode, foundQuiz:foundQuiz}});
    }catch(e){
      console.error("Failed to navigate to quiz page", e);
      alert("Failed to join the quiz. Please try again.");
      setQuizCode("");
      navigate("/"); // Redirect to home page if failed to join the quiz.
    }
  }

  return (
      <div className="Join_Section">
        <p>Enter valid quiz code here</p>
        <input value= {quizCode} type="text" placeholder="Quiz Code" onChange={(e) => setQuizCode(e.target.value)}/>
        <button onClick={handleJoinQuiz}>Join Quiz</button>
        {foundQuiz && <div className="error_section">
          <p>There is no quiz available for the enterned Quiz code</p>
        </div>}
      </div>
  );
};

export default QuizJoinner;
