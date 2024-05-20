import React from "react";

const Feedback = ({ feedbackCounts, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p>Good: {feedbackCounts.good}</p>
      <p>Neutral: {feedbackCounts.neutral}</p>
      <p>Bad: {feedbackCounts.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {isNaN(positiveFeedback) ? 0 : positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
