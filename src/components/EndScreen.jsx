import React from "react";
import "../css/EndScreen.css";
import PurpleConfetti from "./PurpleConfetti";

function EndScreen({setPage}) {
  return (
    <>
      <PurpleConfetti count={100} />
    <div className="EndScreen">
      <p className="end-title">כל הכבוד!</p>
      <p className="end-text">
        עכשיו אתם יודעים את כל ששת שלבי הביצוע בעקרונות לניהול זמן!
      </p>
      <button className="startBtn restartBtn" onClick={() => setPage(0)}>בא לי שוב!</button>
    </div>
    </>
  );
}

export default EndScreen;
