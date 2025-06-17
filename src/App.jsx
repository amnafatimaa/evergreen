import React, { useState } from 'react';
import Header from './components/Header';
import Timer from './components/Timer';
import Plant from './components/Plant';
import DailyGoal from './components/DailyGoal';
import Footer from './components/Footer';
import MotivationalQuote from './components/Quote';
import './index.css';

const App = () => {
  const [sessionCount, setSessionCount] = useState(0);

  const handleSessionComplete = () => {
    setSessionCount((prev) => Math.min(prev + 1, 4));
    // eventually: trigger plant growth here 🌱
  };

  return (
    <div className="app-container">
      <Header />
      <MotivationalQuote />
      <main className="main-content">
        <Timer onSessionComplete={handleSessionComplete} />
        <Plant sessionCount={sessionCount} />
        <DailyGoal sessionCount={sessionCount} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
