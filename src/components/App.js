import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

const App = () => {
  const [value, setValue] = useState ({
          total: null,
          next: null,
          operation: null,
  });
 
  const handleClick = btnName => {
    const calculation = calculate(value, btnName);
    setValue({ ...calculation });
  }

  return (
    <div className="app">
      <h1>React Calculator</h1>
      <Display result={(value.next && value.next.toString()) || (value.total && value.total.toString())} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

export default App;