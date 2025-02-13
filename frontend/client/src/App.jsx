import React from "react";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-5xl font-bold mb-4">Welcome to ASAP</h1>
      <p className="text-lg text-center max-w-lg">
        Your go-to platform for exploring ideas as quickly as possible! Start your journey now.
      </p>
      <button className="mt-6 px-6 py-3 bg-yellow-400 text-black font-semibold text-lg rounded-lg shadow-lg hover:bg-yellow-300 transition-all">
        Get Started
      </button>
    </div>
  );
};

export default App;
