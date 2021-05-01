import React from 'react';

const Quote = () => {
  const quotes = {
    head: 'Math Magician',
    quote: 'Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. –William Paul Thurston',
  };

  return (
    <div>
      <h1>{quotes.head}</h1>
      <h3>{quotes.quote}</h3>
    </div>
  )
};

export default Quote;