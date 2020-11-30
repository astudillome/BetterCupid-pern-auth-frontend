import React from 'react';

const Home = () => {
  const quotes = [
    "I hate to see you go, I love to watch you leave. - John Travolta",
    "Gimme some sugar, baby. - Bruce Campbell",
    "It is better to be hated for what you are than to be loved for what you're not. - Andre Gide",
    "You are everything I never knew I always wanted. - Matthew Perry",
    "The best thing to hold onto in life is each other. - Audrey Hepburn",
    "Love is the absence of judgement. - Dalai Lama",
    "To be brave is to love someone unconditionally, without expecting anything in return. - Madonna ",
    "You know you're in love when you can't fall asleep because the reality is finally better than your dreams. - Dr Seuss",
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <h1 className="quote text-center">{quote}</h1>
  );
}

export default Home;