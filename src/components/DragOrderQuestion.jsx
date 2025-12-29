import React, { useState } from "react";
import "../css/Drag.css";

function DragOrderQuestion({ question, onCorrect }) {
  if (!question || !question.answers || !question.order) {
    return null;
  }

  const [bank, setBank] = useState(question.answers);
  const [order, setOrder] = useState([]);
  const [draggedItem, setDraggedItem] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onDragStart = (item) => setDraggedItem(item);
  const onTouchStart = (item) => setDraggedItem(item);

  const onDrop = () => {
    if (!draggedItem) return;

    setOrder((prev) => [...prev, draggedItem]);
    setBank((prev) => prev.filter((i) => i !== draggedItem));
    setDraggedItem(null);
  };

  const resetGame = () => {
    setBank(question.answers);
    setOrder([]);
    setDraggedItem(null);
    setError(false);
  };

  const checkAnswer = () => {
    const isCorrect = order.every((item, i) => item === question.order[i]);

    if (isCorrect) {
      setSuccess(true);
      setTimeout(onCorrect, 2000);
    } else {
      setError(true);
      setTimeout(resetGame, 1500);
    }
  };

  return (
    <div className="drag-question">
      <h2>{question.question}</h2>

      {success && (
        <div className="success-overlay">
          <div className="success-box">🎉 כל הכבוד! 🎉</div>
        </div>
      )}

      {/* אזור הסידור */}
      <div
        className="drop-area"
        onDragOver={(e) => e.preventDefault()}
        onDrop={onDrop}
        onTouchEnd={onDrop}
      >
        {order.map((item, i) => (
          <div key={i} className="drag-item placed">
            {item}
          </div>
        ))}
      </div>

      {/* המחסן */}
      <div className="bank">
        {bank.map((item, i) => (
          <div
            key={i}
            className="drag-item"
            draggable
            onDragStart={() => onDragStart(item)}
            onTouchStart={() => onTouchStart(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        disabled={order.length !== question.order.length}
        onClick={checkAnswer}
      >
        בדיקה
      </button>

      {error && <p className="error-text">הסדר לא נכון, מתחילים מחדש…</p>}
    </div>
  );
}

export default DragOrderQuestion;
