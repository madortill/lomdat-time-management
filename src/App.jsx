import React from "react";
import { useState } from "react";
import "./css/App.css";
import OpeningPage from "./components/OpeningPage";
import ImgAndText from "./components/ImgAndText";
import Question from "./components/Question";
import logoTill from "./assets/images/logoTill.svg";
import logoMifkada from "./assets/images/logoMifkada.png";
import hadrahaLogo from "./assets/images/hadrahaLogo.png";
import schoolLogo from "./assets/images/schoolLogo.png";
import data from "./data/data.json";
import EndStory from "./components/EndStory";
import DragOrderQuestion from "./components/DragOrderQuestion";
import Explanation from "./components/Explanation";
import EndScreen from "./components/EndScreen";

function App() {
  const [page, setPage] = useState(0);
  const [sectionIndex, setSectionIndex] = useState(0); // 0–5
  const [showQuestion, setShowQuestion] = useState(false);

  const goNext = () => {
    // אם אנחנו בטקסט
    if (!showQuestion) {
      setShowQuestion(true);
    }
    // אם אנחנו בשאלה
    else {
      if (sectionIndex === data.questions.length - 1) {
        setPage(2); // מעבר לעמוד הבא
      } else {
        setShowQuestion(false);
        setSectionIndex((prev) => prev + 1);
      }
    }
  };

  return (
    <>
      <div className="app">
        <img src={logoTill} alt="logoTill" className="logoTill" />
        <div className="logos">
          <img src={logoMifkada} alt="logoMifkada" className="logoMifkada" />
          <img src={hadrahaLogo} alt="hadrahaLogo" className="hadrahaLogo" />
          <img src={schoolLogo} alt="schoolLogo" className="schoolLogo" />
        </div>
        {page === 0 && <OpeningPage setPage={setPage} />}
        {page === 1 && (
        <>
          {!showQuestion && (
            <ImgAndText
              index={sectionIndex}
              onNext={goNext}
            />
          )}

          {showQuestion && (
            <Question
              question={data.questions[sectionIndex]}
              onCorrect={goNext}
            />
          )}
        </>
      )}
      {page === 2 && <EndStory setPage={setPage}/>}
      {page === 3 && <DragOrderQuestion question={data.drag[0]} onCorrect={() => setPage(4)}/>}
        {page === 4 && <Explanation setPage={setPage} cards={data.flipCards}/>}
        {page === 5 && <EndScreen setPage={setPage}/>}
      </div>
    </>
  );
}

export default App;
