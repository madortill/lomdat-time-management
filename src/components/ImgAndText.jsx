import React from "react";
import nextBtn from "../assets/images/next-arrow.svg";
import "../css/ImgAndText.css";
import data from "../data/data.json";

function ImgAndText({ index, onNext }) {
  const text = data.texts[index].text;
  return (
    <div>
      <div className="textStory">
        <p className="textStory-text">{text}</p>
      <img
        className="nextBtnImgText"
        src={nextBtn}
        alt="nextBtn"
        onClick={onNext}
      />
      </div>
    </div>
  );
}

export default ImgAndText;
