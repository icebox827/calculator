import React from 'react';

const Quote = () => {
  const greetings = {
    title: 'Math Magician',
    quote: 'Mathematics is not about numbers, equations, computations or algorithms: it is about understanding. –William Paul Thurston',
  };

  return (
    <div>
      <h1>{title}</h1>
      <h3>{quote}</h3>
    </div>
  )
};

export default Quote;