import { useState, useEffect } from "react";
import axios from "axios";

import "./QuizPage.scss";
import QuizTimer from "../../components/QuizTimer/QuizTimer";
import quizLogo from "../../assets/quizLogo.jpg";
import { IoIosCloseCircle } from "react-icons/io";
import Congratulations from "../../components/Congratulations/Congratulations.jsx";
import { useLocation, useNavigate } from "react-router-dom";

const QuizPage = () =>{
const [data, setData] = useState(null);
const [quizQuestionsList, setQuizQuestionsList] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [quizCode, setQuizCode] = useState("3000GF");

  const [totalCount, setTotalCount] = useState(0);
  const [currentCount, setCurrentCount] = useState(0);

  const [congratTrigger, setCongratTrigger] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state; // Get the passed data


   // Define an async function to fetch data
   const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/quiz/questions?quizCode=" + receivedData.quizCode);
      if(response.data.quizQuestionsList == null){
        alert("No questions found for this quiz.");
        navigate("/"); // Redirect to home page if no questions found.
        return;  // Stop the function execution if no questions found.
      }
      setData(response.data); // Set the fetched data
      setQuizQuestionsList(response.data.quizQuestionsList);
      console.log(JSON.stringify(response.data.quizQuestionsList));
      console.log(typeof response.data.quizQuestionsList);
      setLoading(false); // Mark as loaded
      setTotalCount(response.data.quizQuestionsList.length); // Set the total count from the fetched data
    } catch (error) {
      console.error(error); // Log the error
      setLoading(false); // Mark as loaded even if there’s an error
    }
  };

  // const fetchTotalCount = async () =>{
  //   try{
  //     const response = await axios.get("http://localhost:8080/quiz/get-total-records");
  //     setTotalCount(response.data);
  //     console.log(response.data);
      
  //   }catch(err){
  //     console.log(err);
  //   }
  // }
  useEffect(() => {
    fetchData(); // Call the function
  }, []); // Empty dependency array ensures it runs only once on mount

  // useEffect(() =>{
  //   fetchTotalCount(); //
  // }, []); // Empty dependency array ensures it runs only once on

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const nextQuestion = () => {
    if(currentCount === totalCount-1){
      // alert("Congratulations! You have completed the quiz.");
      // reset the quiz number and current count
      setCongratTrigger(true);
      // setQuizNumber(1);
      setCurrentCount(0);
    }else{
      // setQuizNumber(prevState => prevState + 1); // Increment the quiz number by 1
      setCurrentCount(prevState => prevState + 1); // Increment the current
    }
  }
  const prevQuestion = () => {
    if(currentCount === 0){
      alert("This is the first question.");
      // setQuizNumber(1);
      setCurrentCount(0);
    }else{
      // setQuizNumber(prevState => prevState - 1); // Increment the quiz number by 1
      setCurrentCount(prevState => prevState - 1); // Increment the current
    }
  }

  const quitQuiz = () =>{
    // eslint-disable-next-line no-restricted-globals
      let  isQuit = confirm("You cannot attend this quiz again. \nDo you want to quit this quiz?");
      if (isQuit){
        navigate("/");
      }
  }
  

  return (
    <div className="Quiz_App_Container">
            {data ? (
              <div className="Qui_App_Box">
                <div className="Quiz_App_Timer">
                  {/* <div className="QuizLogo"><img src={quizLogo} alt="" /></div> */}
                  <button className="quitButton" onClick={quitQuiz}><IoIosCloseCircle size={30} style={{ marginRight: '7px' }}/> Quit</button>
                  <QuizTimer />
                </div>
                <div className="Question">
                        <h1>{quizQuestionsList.at(currentCount).question}</h1>
                </div>
                <div className="options">
                        <p><span>A</span>{quizQuestionsList.at(currentCount).optionA}</p>
                        <p><span>B</span>{quizQuestionsList.at(currentCount).optionB}</p>
                        <p><span>C</span>{quizQuestionsList.at(currentCount).optionC}</p>
                        <p><span>D</span>{quizQuestionsList.at(currentCount).optionD}</p>
                </div>
                <div className="Quiz_App_Buttons" >
                    <button onClick={prevQuestion}>PREV QUESTION</button>
                    <div className="Question_Count_Bar">
                      <p>Question {currentCount+1} / {totalCount}</p>
                      <div class="progress_bar_container">
                        <div className="progress_bar" style={{"width" : `${((currentCount))/(totalCount-1)*100}%`}}></div>
                      </div>
                    </div>
                    <button onClick={nextQuestion}>{currentCount === totalCount?"SUBMIT QUIZ" : "NEXT QUESTION"}</button>
                </div>
                <Congratulations trigger = {congratTrigger}/>
        </div>
            ) : (
                <h1>No data available</h1>
            )}

    </div>
  );
}

export default QuizPage;