import React from 'react';
import Calculator from './components/Calculator';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <h1>React Calculator</h1>
        <p>By Uzair Ali</p>
        <Calculator />
      </div>
    );
  }
}

export default App;
