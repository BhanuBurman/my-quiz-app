import { Routes, Route, useLocation } from "react-router-dom";
import {Element} from "react-scroll";

import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./container/Home/Home";
import QuizPage from "./container/QuizPage/QuizPage";
import QuizCreatorPage from "./container/QuizCreatorPage/QuizCreatorPage";

const  App = () => {
  const location = useLocation();
  return(
    <>
    {(location.pathname !== "/quiz") && <NavBar />}
    <Routes>
    <Route
          path="/"
          element={
            <>
              <Element name="homeSection">
                <Home />
              </Element>
              <Element name="quizCreatorSection">
                <QuizCreatorPage />
              </Element>
            </>
          }
        />
      <Route path="/quiz" element={<QuizPage />} />
      {/* <Route path="/" element={<App />} /> */}
      {/* <Route path="/creator-page" element={<QuizCreatorPage />} /> */}
    </Routes>
      {/* <QuizCreatorPage /> */}
      {/* <Home /> */}
    </>
  )
}

export default App;
