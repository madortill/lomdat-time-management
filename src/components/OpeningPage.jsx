import React, { useState } from 'react'
import "../css/openingPage.css";
import openImg from "../assets/images/openingPage/openImg.png";

function OpeningPage({setPage}) {
  const [step, setStep] = useState(0)
  const nextPage = () => {
    if (step === 0) {
      setStep(1);
    } else {
      setPage(1);
    }
  }

  return (
    <div className='open-screen'>
      <div className='openTextContainer'>
        <p className='openingTitle'>לומדת עקרונות ניהול זמן</p>
        <p className='openingSecTitle'>ששת שלבי ביצוע</p>
      </div>
     {step === 0 && <div className='first-step'>
      <div className='imagesContainer'>
        <img src={openImg} alt="openImg" className='openImg' />
    </div>
    <button className='startBtn' onClick={nextPage}>לחצו אין זמן!</button>
      </div>}
      {step === 1 && <div className='second-step'>
        <p className='second-step-text'>היום אנחנו הולכים ללמוד על ששת שלבי הביצוע דרך “סיפור המועדון”</p>
        <p className='second-step-text'>על מה הסיפור?</p>
        <button className='startBtn' onClick={nextPage}>בואו נתחיל ותגלו!</button>
        </div>}
    </div>
  )
}

export default OpeningPage
