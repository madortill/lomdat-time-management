import React from 'react'
import "../css/openingPage.css";
import openImg from "../assets/images/openingPage/openImg.png";

function OpeningPage() {
  return (
    <div className='open-screen'>
      <div className='openTextContainer'>
        <p className='openingTitle'>לומדת עקרונות ניהול זמן</p>
        <p className='openingSecTitle'>ששת שלבי ביצוע</p>
      </div>
      <div className='imagesContainer'>
        <img src={openImg} alt="openImg" className='openImg' />
    </div>
    <button></button>
    </div>
  )
}

export default OpeningPage
