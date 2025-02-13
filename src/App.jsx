import React from "react";

const App = () => {
  return (
    <div className="app-container">
      {/* Background Elements for Styling */}
      <div className="background-elements">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
      </div>

      {/* Content Section */}
      <div className="content">
        <h1 className="glowing-text">S63 WEIRDEST THINGS TO TRY</h1>
        <p className="subtitle">
          Step out of your comfort zone and explore the most bizarre and fun challenges ever!
        </p>

        {/* CTA Button */}
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
      </div>
    </div>
  );
};

export default App;
