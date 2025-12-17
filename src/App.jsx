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

function App() {
  const [page, setPage] = useState(0);

  return (
    <>
  <div className="app">
    <img src={logoTill} alt="logoTill"  className="logoTill" />
    <div className="logos">
    <img src={logoMifkada} alt="logoMifkada"  className="logoMifkada" />
    <img src={hadrahaLogo} alt="hadrahaLogo"  className="hadrahaLogo" />
    <img src={schoolLogo} alt="schoolLogo"  className="schoolLogo" />
    </div>
      { page === 0 && <OpeningPage setPage={setPage}/>}
      { page === 1 && <ImgAndText setPage={setPage}/>}
      { page === 2 && <Question/> }
  </div>
  </>
  );
}

export default App;
