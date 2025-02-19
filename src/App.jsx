import React from "react";
// import ChallengeCard from "./ChallengeCard";
import ChallengeCard from "./components/ChallengeCard";


const App = () => {
  // Sample challenges
  const challenges = [
    {
      title: "Eat a Lemon Without Making a Face 🍋",
      description: "Try to eat a whole lemon slice without making a sour face!",
      difficulty: "Medium",
    },
    {
      title: "Wear Socks on Your Hands for a Day 🧦",
      description: "Replace gloves with socks and go about your day!",
      difficulty: "Easy",
    },
    {
      title: "Talk in Rhyme for an Hour 🎤",
      description: "Speak only in rhymes, no matter the conversation!",
      difficulty: "Hard",
    },
    {
      title: "Walk Backward Everywhere for 10 Minutes 🔄",
      description: "Navigate the world in reverse for a fun challenge!",
      difficulty: "Medium",
    },
  ];

  return (
    <div className="app-container">
      {/* Background Elements */}
      <div className="background-elements">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>

      {/* Main Title */}
      <h1 className="glowing-text">S63 WEIRDEST THINGS TO TRY</h1>
      <p className="subtitle">
        Step out of your comfort zone and explore the most bizarre and fun challenges ever!
      </p>

      {/* Call-to-Action Button */}
      <button className="glowing-button">Start Exploring</button>

      {/* Feature Cards */}
      <div className="feature-container">
        <div className="card">
          <h3>🎭 Unique Challenges</h3>
          <p>Explore weird and quirky tasks that will keep you entertained.</p>
        </div>
        <div className="card">
          <h3>🌍 Community Driven</h3>
          <p>Share your experiences, rate challenges, and suggest new ones.</p>
        </div>
        <div className="card">
          <h3>🚀 Daily Surprises</h3>
          <p>Every day brings a new weird challenge for you to try!</p>
        </div>
      </div>

      {/* New Heading for Challenges Section */}
      <h2 className="section-heading">🔥 Weird Challenges You Can Try 🔥</h2>

      {/* Challenges Section */}
      <div className="challenge-container">
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} {...challenge} />
        ))}
      </div>
    </div>
  );
};

export default App;
