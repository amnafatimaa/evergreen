import React, { useState } from 'react';

const MotivationalQuote = () => {
  const quotes = [
    "The best way to predict the future is to create it. - Peter Drucker",
    "Focus on the journey, not the destination. - Greg Anderson",
    "Growth begins where comfort ends. - Unknown",
    "Success is the sum of small efforts, repeated day in and day out. - Robert Collier",
    "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt",
    "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The secret of getting ahead is getting started. - Mark Twain",
    "Hard work beats talent when talent doesn't work hard. - Tim Notke",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Perseverance is not a long race; it is many short races one after the other. - Walter Elliot",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Act as if what you do makes a difference. It does. - William James",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Act as if what you do makes a difference. It does. - William James",
    "The harder you work for something, the greater you’ll feel when you achieve it. - Unknown",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
  ];

  const [quote, setQuote] = useState({ 
    text: quotes[Math.floor(Math.random() * quotes.length)], 
    key: Date.now() 
  });

  const getRandomQuote = () => {
    let newQuote;
    do {
      newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (newQuote === quote.text); // Ensure we don't show the same quote twice in a row
    
    setQuote({ 
      text: newQuote, 
      key: Date.now() 
    });
  };

  const [quoteText, author] = quote.text.split(' - ');

  return (
    <div className="quote-card" key={quote.key}>
      <p>"{quoteText}" <span className="author">- {author}</span></p>
      <button onClick={getRandomQuote}>New Quote</button>
    </div>
  );
};

export default MotivationalQuote;