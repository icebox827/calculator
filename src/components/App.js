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

  handleClick(btnName) {

  }

  render() {
    return (
      <React.Fragment>
        <h1>Calculator</h1>
        <Display />
        <ButtonPanel />
      </React.Fragment>
    );
  }
}

export default App;

