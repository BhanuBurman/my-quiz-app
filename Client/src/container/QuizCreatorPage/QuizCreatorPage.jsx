import React, { useState } from "react";

import { Element } from "react-scroll";

import QuizCreator from "../../components/QuizCreator/QuizCreator.jsx";
import QuizJoinner from "../../components/QuizJoinner/QuizJoinner.jsx";

import "./QuizCreatorPage.scss";

const QuizCreatorPage = () => {
  const [isCreatorSection, setIsCreatorSection] = useState(true);
  // const [isCreateButtonClicked, setIsCreateButtonClicked] = useState(true);

  const handleCreatorSection = () => {
    setIsCreatorSection(true);
  };
  const handleJoinnerSection = () => {
    setIsCreatorSection(false);
  };

  return (
    // <Element name = "quizCreatorSection">
    <div className="Quiz_Creator_Page_Container">
      <div className="creator_page_inner_box">
        <h1>Quiz Creator</h1>
        <p>Create or Join your quizzes here.</p>
        <div className="creator_joinner_buttons">
          <button className = {isCreatorSection?"active":"not-active"} onClick={handleCreatorSection}>Create New Quiz</button>
          <button className = {!isCreatorSection?"active":"not-active"} onClick={handleJoinnerSection}>Join a Quiz</button>
        </div>
        {isCreatorSection ? <QuizCreator /> : <QuizJoinner />}
      </div>
    </div>
    // </Element>
  );
};

export default QuizCreatorPage;
