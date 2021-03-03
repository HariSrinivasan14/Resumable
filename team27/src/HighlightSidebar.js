import React from "react";
import './HighlightSidebar.css';

function HighlightSidebar({ feedbackItems }) {

  return (
    <div className="highlight-sidebar">
      <div className="description">
        <h2>Feedback Items</h2>
      </div>

      <ul className="feedback-items">
        {feedbackItems.map((feedbackItem, index) => (
          <li
            key={index}
            className="feedback-item"
          >
            <div>
              <strong>{feedbackItem.title.text}</strong>
              <div className="feedback-item-content">
                  {feedbackItem.content.text}
              </div>
                {feedbackItem.content.image ? (
                  <div className="feedback-item-image">
                      <img src={feedbackItem.content.image} alt={"No Image Found!"} />
                  </div>
                  ) : null
                }
              </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HighlightSidebar;
