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
    console.log(calculation)
  }

  return (
    <div>
      <h1>React Calculator</h1>
      <Display result={value.operation ? value.next : value.total} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
}

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: null,
//       next: null,
//       operation: null,
//     };
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick = btnName => {
//     const data = { ...this.state };
//     const calculation = calculate(data, btnName);
//     this.setState({ ...calculation });
//   }

//   render() {
//     const { next, total } = this.state;
//     return (
//       <div>
//         <h1>React Calculator</h1>
//         <Display result={(next && next.toString()) || (total && total.toString())} />
//         <ButtonPanel clickHandler={data => this.handleClick(data)} />
//       </div>
//     );
//   }
// }

export default App;