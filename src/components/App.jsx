import React, { useState, useEffect } from "react";

import "./App.css";

import Feedback from "./Feedback/Feedback";

import Options from "./Options/options";

import Description from "./Description/Description";

const App = () => {
  const initialFeedbackCounts = JSON.parse(
    localStorage.getItem("feedbackCounts")
  ) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedbackCounts, setFeedbackCounts] = useState(initialFeedbackCounts);

  useEffect(() => {
    localStorage.setItem("feedbackCounts", JSON.stringify(feedbackCounts));
  }, [feedbackCounts]);

  const totalFeedback =
    feedbackCounts.good + feedbackCounts.neutral + feedbackCounts.bad;
  const positiveFeedback = Math.round(
    (feedbackCounts.good / totalFeedback) * 100
  );

  const updateFeedback = (feedbackType) => {
    setFeedbackCounts((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };
  const resetFeedback = () => {
    setFeedbackCounts({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />

      {totalFeedback > 0 ? (
        <Feedback
          feedbackCounts={feedbackCounts}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification message="No feedback yet." />
      )}
    </div>
  );
};

const Notification = ({ message }) => {
  return <p>{message}</p>;
};

export default App;
