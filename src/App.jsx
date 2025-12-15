import React from "react";
import { useState } from "react";
import "./css/App.css";
import OpeningPage from "./components/OpeningPage"; 
import logoTill from "./assets/images/logoTill.svg";
import logoMifkada from "./assets/images/logoMifkada.png";
import hadrahaLogo from "./assets/images/hadrahaLogo.png";
import schoolLogo from "./assets/images/schoolLogo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
  <div className="app">
    <img src={logoTill} alt="logoTill"  className="logoTill" />
    <div className="logos">
    <img src={logoMifkada} alt="logoMifkada"  className="logoMifkada" />
    <img src={hadrahaLogo} alt="hadrahaLogo"  className="hadrahaLogo" />
    <img src={schoolLogo} alt="schoolLogo"  className="schoolLogo" />
    </div>
    <OpeningPage/>
  </div>
  </>
  );
}

export default App;
