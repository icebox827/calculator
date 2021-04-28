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
    const result = calculate(this.state, btnName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    return (
      <React.Fragment>
        <h1>React Calculator</h1>
        <Display result={next !== null ? next : total || undefined} />
        <ButtonPanel clickHandler={this.handleClick} />
      </React.Fragment>
    );
  }
}

export default App;

