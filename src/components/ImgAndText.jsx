import React from 'react'
import nextBtn from"../assets/images/next-arrow.svg"
import "../css/ImgAndText.css";

function ImgAndText({setPage}) {
    const nextPage = () => {
        setPage(2);
    }
  return (
    <div>
      text
    <img className='nextBtnImgText' src={nextBtn} alt="nextBtn" onClick={nextPage}/>
    </div>
  )
}

export default ImgAndText
