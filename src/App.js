import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './components/Calculator';
import MainHeader from './components/Navbar';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="nav-flex">
          <div>
            <h1>React Calculator</h1>
            <p>By Uzair Ali</p>
          </div>
          <MainHeader className="nav-item" />
        </div>

        <Routes>
          <Route path="/" element={<Calculator />} />
        </Routes>
      </div>
    );
  }
}

export default App;
