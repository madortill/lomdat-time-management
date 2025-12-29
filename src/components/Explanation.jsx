import React, { useState } from "react";
import FlipCard from "./FlipCard";
import "../css/Explanation.css";

function Explanation({ cards, setPage }) {
    if (!cards || !Array.isArray(cards)) {
        return null;
      }
  const [pageIndex, setPageIndex] = useState(0);
  const [flipped, setFlipped] = useState(new Set());

  const pages = [
    cards.slice(0, 3),
    cards.slice(3, 6),
  ];

  const currentCards = pages[pageIndex];

  const handleFlip = (cardIndex) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      next.add(cardIndex);
      return next;
    });
  };

  const allFlipped = flipped.size === cards.length;

  return (
    <div className="flip-page">
      <p className="flip-instruction">
      לחץ על הכרטיסיות כדי ללמוד על כל עיקרון
      </p>

      <div className={`cards-wrapper slide-${pageIndex}`}>
        {currentCards.map((card, index) => {
          const globalIndex = pageIndex * 3 + index;

          return (
            <FlipCard
              key={globalIndex}
              front={card.front}
              back={card.back}
              onFlip={() => handleFlip(globalIndex)}
            />
          );
        })}
      </div>

      <div className="cards-navigation">
        <button
          className="arrow-btn"
          disabled={pageIndex === 0}
          onClick={() => setPageIndex(0)}
        >
          ▶
        </button>

        <button
          className="arrow-btn"
          disabled={pageIndex === 1}
          onClick={() => setPageIndex(1)}
        >
          ◀
        </button>
      </div>

      {allFlipped && (
        <button className="nextBtn next-page-btn" onClick={() => setPage(5)}>
          סיום הלומדה!
        </button>
      )}
    </div>
  );
}

export default Explanation;
