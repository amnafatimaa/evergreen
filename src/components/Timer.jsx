import React, { useState, useEffect } from 'react';

const Timer = ({ onSessionComplete }) => {
  const STUDY_TIME = 25 * 60; // 25 minutes in seconds
  const BREAK_TIME = 5 * 60;  // 5 minutes in seconds

  const [timeLeft, setTimeLeft] = useState(STUDY_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  // Format time (mm:ss)
  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  // Countdown logic
  useEffect(() => {
    let timer = null;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
      if (isBreak) {
        // Break is over, reset to study time
        setTimeLeft(STUDY_TIME);
        setIsBreak(false);
      } else {
        // Study session complete, start break
        setTimeLeft(BREAK_TIME);
        setIsBreak(true);
        if (onSessionComplete) onSessionComplete();
      }
    }

    return () => clearInterval(timer);
  }, [isRunning, timeLeft, isBreak, onSessionComplete]);

  // Controls
  const startPauseTimer = () => {
    setIsRunning(!isRunning);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(isBreak ? BREAK_TIME : STUDY_TIME);
  };

  const skipBreak = () => {
    if (isBreak) {
      setIsBreak(false);
      setIsRunning(false);
      setTimeLeft(STUDY_TIME);
    }
  };

  return (
    <section className="component-card" style={{
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2>⏱️ {isBreak ? 'Break Time!' : 'Focus Time'}</h2>
      <div style={{ 
        fontSize: '3rem', 
        margin: '20px 0',
        fontFamily: 'monospace',
        fontWeight: 'bold',
        color: isBreak ? 'rgb(134, 207, 186)' : 'inherit'
      }}>
        {formatTime(timeLeft)}
      </div>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button 
          onClick={startPauseTimer}
          style={{
            padding: '0.5rem 1.5rem',
            backgroundColor: isRunning ? '#ef4444' : '#4ade80',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'transform 0.2s ease, background-color 0.3s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          {isRunning ? 'Pause' : 'Start'}
        </button>
        <button 
          onClick={resetTimer} 
          style={{ 
            padding: '0.5rem 1.5rem',
            backgroundColor: '#94a3b8',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'transform 0.2s ease'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Reset
        </button>
        {isBreak && (
          <button 
            onClick={skipBreak}
            style={{ 
              padding: '0.5rem 1.5rem',
              backgroundColor: '#f59e0b',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'transform 0.2s ease'
            }}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
          >
            Skip Break
          </button>
        )}
      </div>
      <div style={{ 
        marginTop: '1rem',
        fontSize: '0.875rem',
        color: '#6b7280'
      }}>
        {isBreak ? 'Take a short break!' : 'Focus time: 25 minutes'}
      </div>
    </section>
  );
};

export default Timer;
