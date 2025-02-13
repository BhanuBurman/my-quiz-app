import React, { useState, useEffect } from "react";

import "./QuizCreator.scss";
import axios from "axios";

import { RiDeleteBin5Fill } from "react-icons/ri";

const QuizCreator = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [title, setTitle] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [questionData, setQuestionData] = useState([]);
  const [quizCode, setQuizCode] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("EASY");
  const [category, setCategory] = useState("");
  const [isQuizUploaded, setIsQuizUploaded] = useState(false);
  const [createButtonClicked, setCreateButtonClicked] = useState(false);

  const uploadQuizQuestions = async () => {
    const payload = {
      quizCode: quizCode,
      quizTitle: title,

      category: category,
      quizQuestionRequestDTOList: questionData,
    };
    console.log("Final Payload:", JSON.stringify(payload, null, 2));

    try {
      const response = await axios.post(
        "http://localhost:8080/quiz/create-quiz",
        payload
      );

      console.log(response.data);
      setIsQuizUploaded(true);

      // Reset the form only afetr successful upload
      setQuestion("");
      setAnswer("");
      setTitle("");
      setOptions(["", "", "", ""]);
      setQuestionData([]);
      setCategory("");
    } catch (error) {
      console.error("Error Creating Quiz:", error);
      setIsQuizUploaded(false);
    }
  };

  useEffect(() => {
    if (quizCode) {
      uploadQuizQuestions();
    }
  }, [quizCode]);

  const handleCreateQuiz = () => {
    if (title === "" || questionData.length === 0) {
      alert("Please fill all the fields.");
      return;
    }
    console.log(title);
    console.log(questionData);
    const quizCode = (
      (crypto.getRandomValues(new Uint32Array(1))[0] % 9000000) +
      1000000
    ).toString();
    // TODO: Send the quiz data to the server
    setQuizCode(quizCode);
    setCreateButtonClicked(true); //
  };
  const handleAddQuestion = () => {
    if (question === "" || answer === "" || options.includes("")) {
      alert("Please fill all the fields.");
      return;
    }
    console.log(questionData);

    const newQuestion = {
      question: question,
      optionA: options.at(0),
      optionB: options.at(1),
      optionC: options.at(2),
      optionD: options.at(3),
      answer: answer,
      difficultyLevel: difficultyLevel,
    };
    setQuestionData([...questionData, newQuestion]);
    // console.log(newQuestion);
    // console.log(questionData);
    setAnswer("");
    setQuestion("");
    setOptions(["", "", "", ""]);
  };

  const handleOptions = (index, value) => {
    const newQuestion = [...options];
    newQuestion[index] = value;
    setOptions(newQuestion);
  };

  const handleDeleteQuestion = (index) => {
    const newQuestions = [...questionData];
    newQuestions.splice(index, 1);
    setQuestionData(newQuestions);
  };

  return (
    <div className="Quiz_Creator_Section">
      <div className="Creator_Box">
        <div className="Quiz_Title">
          <input
            type="text"
            placeholder="Quiz Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleCreateQuiz}>Create Quiz</button>
        </div>
        {/* // TODO: Make this to radio button instead */}
        <div className="Quiz_Category">
          <input
            type="text"
            placeholder="Quiz Category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="Create_Section">
          <div className="Quiz_Question">
            <input
              value={question}
              type="text"
              placeholder="Question"
              onChange={(e) => setQuestion(e.target.value)}
            />
            <div className="Quiz_Difficulty">
              <select
                value={difficultyLevel}
                onChange={(e) => setDifficultyLevel(e.target.value)}
              >
                <option value="EASY">EASY</option>
                <option value="MEDIUM">MEDIUM</option>
                <option value="HARD">HARD</option>
              </select>
            </div>
          </div>
          <div className="Quiz_Options">
            {options.map((option, index) => (
              <input
                key={index}
                value={option}
                type="text"
                placeholder={`Option ${index + 1}`}
                onChange={(e) => handleOptions(index, e.target.value)}
              />
            ))}
          </div>
          <div className="Quiz_Answer">
            Answer:
            <select value={answer} onChange={(e) => setAnswer(e.target.value)}>
              <option value="" disabled>
                Select Answer
              </option>
              {options
                .filter((option) => option !== "") // Exclude empty options
                .map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
            </select>
          </div>

          <div className="Add_Question_Button">
            <button onClick={handleAddQuestion}>Add Question</button>
          </div>
        </div>
        Here your questions are mentioned :
        <div className="Display_Quiz">
          <h1 className="Display_Title">{title}</h1>
          {questionData.map((question, index) => (
            <div key={index} className="Question_Card">
              <div className="display_quiz_left_section">
                <div className="quiz_card_question_section">
                  <p className="quiz_card_question_section_question">
                    {question.question}
                    <p
                      className="quiz_card_question_section_difficulty"
                      style={{
                        backgroundColor:
                          question.difficultyLevel === "EASY"
                            ? "#008000"
                            : question.difficultyLevel === "HARD"
                            ? "#FF0000"
                            : "rgb(236 208 40)",
                      }}
                    >
                      {question.difficultyLevel}
                    </p>
                  </p>
                </div>
                <div className="quiz_card_options">
                  <p> A: {question.optionA}</p>
                  <p> B: {question.optionB}</p>
                  <p> C: {question.optionC}</p>
                  <p> D: {question.optionD}</p>
                </div>
                <p>Answer: {question.answer}</p>
              </div>
              <div className="display_quiz_right_section">
                <button onClick={() => handleDeleteQuestion(index)}>
                  <RiDeleteBin5Fill />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {createButtonClicked && (
        <div className="Quiz_Upload_Status_Info">
          {isQuizUploaded ? (
            <>
              <div>
                Quiz has been created successfully, Share your quiz by using
                this code
              </div>
              <p className="Quiz_Code_Box">
                Quiz code: <p className="Quiz_Code_Number">{quizCode}</p>
              </p>
            </>
          ) : (
            <div>Error creating this quiz, please try again later....</div>
          )}
        </div>
      )}
    </div>
  );
};

export default QuizCreator;
