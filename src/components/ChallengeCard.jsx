import React from "react";

const ChallengeCard = ({ title, description, difficulty }) => {
  return (
    <div className="challenge-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <span className="difficulty">{difficulty}</span>
    </div>
  );
};

export default ChallengeCard;
