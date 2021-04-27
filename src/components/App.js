import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate'
import '../App.css';


function App() {
  return (
    <React.Fragment>
      <h1>Calculator</h1>
      <Display />
      <ButtonPanel />
    </React.Fragment>
  );
}

export default App;

