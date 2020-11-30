import React from 'react';
const quotes = [
  "I hate to see you go, I love to watch you leave.",
  "Gimme some sugar, baby.",
  "We gotta get you out of those wet clothes and into a dry martini.",
  "It is better to be hated for what you are than to be loved for what you're not - Andre Gide, Autumn Leaves"
];
const quote = quotes[Math.floor(Math.random() * quotes.length)];
const Home = () => {
  
  return (
    <div>
      <h1>{quote}</h1>
    </div>
  );
}
export default Home;