import React from 'react';

const quotes = [
  "I hate to see you go, I love to watch you leave. - John Travolta",
  "Gimme some sugar, baby. - Bruce Campbell",
  "We gotta get you out of those wet clothes and into a dry martini. -Jay Chandrasekhar",
  "It is better to be hated for what you are than to be loved for what you're not - Andre Gide",
  "Love is the absence of judgement  -Dalai Lama",
  "We are most alive when we're in love. -John Updike",
  "To be brave is to love someone unconditionally, without expecting anything in return. -Madonna ",
  "You know you're in love when you can't fall asleep because the reality is finally better than your dreams. - Dr Seuss",
  "The best thing to hold onto in life is each other. -Audrey Hepburn",
  "You are everything I never knew I always wanted. -Matthew Perry"
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];
const Home = () => {
  
  return (
    <div>
      <blockquote>{quote}</blockquote>
    </div>
  );
}
export default Home;