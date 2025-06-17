import React, { useState } from 'react';
import seedling from '../assets/Seedling.png';
import sprout from '../assets/sprout.png';
import plant from '../assets/Plant.png';
import flower from '../assets/Flower.png';

const Plant = ({ sessionCount }) => {
  const [showModal, setShowModal] = useState(false);

  const stages = [
    { 
      image: seedling, 
      alt: 'Seedling stage',
      title: 'Seedling',
      description: 'Your focus journey begins! Complete your first session to see your plant start growing.',
      sessionsNeeded: 1
    },
    { 
      image: sprout, 
      alt: 'Sprout stage',
      title: 'Sprout',
      description: 'Your dedication is paying off! The plant is developing its first leaves.',
      sessionsNeeded: 2
    },
    { 
      image: plant, 
      alt: 'Plant stage',
      title: 'Plant',
      description: 'Growing stronger! Your consistent focus is helping the plant thrive.',
      sessionsNeeded: 3
    },
    { 
      image: flower, 
      alt: 'Flower stage',
      title: 'Flower',
      description: 'Congratulations! Your plant has reached full bloom. Keep up the great work!',
      sessionsNeeded: 4
    }
  ];

  const currentStage = stages[Math.min(sessionCount, stages.length - 1)];

  return (
    <>
      <section 
        className="component-card" 
        style={{
          textAlign: 'center',
          cursor: 'pointer'
        }}
        onClick={() => setShowModal(true)}
      >
        <h2>☘️ Plant Growth</h2>
        <div style={{ 
          margin: '1rem 0',
          minHeight: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img 
            src={currentStage.image} 
            alt={currentStage.alt}
            style={{ 
              maxWidth: '150px',
              height: 'auto',
              transition: 'transform 0.5s ease',
              transform: `scale(${1 + sessionCount * 0.1})`
            }} 
          />
        </div>
        <p style={{
          color: '#666',
          fontSize: '0.9rem',
          marginTop: '0.5rem'
        }}>
          Stage {sessionCount + 1} of {stages.length} (Click to view all stages)
        </p>
      </section>

      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}
        onClick={() => setShowModal(false)}
        >
          <div 
            style={{
              backgroundColor: 'white',
              padding: '2rem',
              borderRadius: '10px',
              maxWidth: '800px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative'
            }}
            onClick={e => e.stopPropagation()}
          >
            <button
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                padding: '0.5rem',
                color: '#666'
              }}
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            <h2 style={{ marginBottom: '1.5rem', color: '#333' }}>Plant Growth Stages</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '2rem',
              alignItems: 'start'
            }}>
              {stages.map((stage, index) => (
                <div 
                  key={stage.title}
                  style={{
                    textAlign: 'center',
                    padding: '1rem',
                    backgroundColor: index === sessionCount ? '#f0fdf4' : 'transparent',
                    borderRadius: '8px',
                    border: '1px solid #e5e7eb'
                  }}
                >
                  <img 
                    src={stage.image} 
                    alt={stage.alt}
                    style={{ 
                      width: '100px',
                      height: 'auto',
                      marginBottom: '1rem'
                    }} 
                  />
                  <h3 style={{ color: '#333', marginBottom: '0.5rem' }}>{stage.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                    {stage.description}
                  </p>
                  <p style={{ 
                    color: '#86CFBA', 
                    fontWeight: '500',
                    fontSize: '0.9rem' 
                  }}>
                    {stage.sessionsNeeded} {stage.sessionsNeeded === 1 ? 'session' : 'sessions'} needed
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Plant;
