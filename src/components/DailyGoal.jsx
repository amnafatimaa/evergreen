import React from 'react';

const DailyGoal = ({ sessionCount = 0 }) => {
  const totalSessions = 4;
  
  return (
    <section className="component-card">
      <h2>✅ Daily Goal</h2>
      <p style={{ marginBottom: '1rem' }}>Complete {totalSessions} focus sessions today</p>
      <div style={{ 
        backgroundColor: '#f0fdf4',
        padding: '1rem',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <div style={{ 
          marginBottom: '0.5rem',
          fontWeight: '500'
        }}>
          Progress: {sessionCount}/{totalSessions}
        </div>
        <progress 
          value={sessionCount} 
          max={totalSessions}
          style={{
            width: '100%',
            height: '8px',
            borderRadius: '4px',
            overflow: 'hidden'
          }}
        />
      </div>
    </section>
  );
};

export default DailyGoal;