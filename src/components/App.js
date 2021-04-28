import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (btnName) => {
    const { data } = this.state;
    const result = calculate(data, btnName);
    this.setState(result);
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <h1>React Calculator</h1>
        <Display result={ data } />
        <ButtonPanel clickHandler={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;

