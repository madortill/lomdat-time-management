import React from "react";
import nextBtn from "../assets/images/next-arrow.svg";
import "../css/ImgAndText.css";
import data from "../data/data.json";

function ImgAndText({ index, onNext }) {
  const { text, img } = data.texts[index];

  const imgSrc = new URL(
    `../assets/images/${img}`,
    import.meta.url
  ).href;

  return (
    <div className="ImgAndText">
      <img className="textStory-img" src={imgSrc} alt="img" />

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
