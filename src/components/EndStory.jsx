import React from 'react'
import "../css/EndStory.css";

function EndStory({setPage}) {
    const nextPage = () => {
        setPage(3);
    }
  return (
    <div className='endStory'>
      <div className='endStory-text'>
      המפקד שלנו יכול להגיד ביי לרבעו”ש הפעם, אבל נוכל לקוות שהוא וגם אנחנו <span>הפקנו לקחים </span> מהסיפור הזה ובפעם הבאה נוכל לזכות ברבעו”ש המיוחל!
      </div>
      <button className='startBtn endStoryBtn' onClick={nextPage}>עכשיו תורכם!</button>
    </div>
  )
}

export default EndStory
