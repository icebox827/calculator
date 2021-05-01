import React from 'react';

const Home = () => {
  const greetings = {
    title: 'Welcome to Math Magician',
    body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };

  return (
    <div>
      <h1>{greetings.title}</h1>
      <h3>{greetings.body}</h3>
    </div>
  )
};

export default Home;