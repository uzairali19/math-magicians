import React from 'react';
import shortid from 'shortid';
import calculate from './logic/calculate';

const calValues = [
  ['AC', '+-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { total: '', next: '', operation: '' };
  }

  render() {
    const btnHandler = (btn) => {
      const value = btn.target.innerText;
      const { total, next, operation } = calculate(this.state, value);
      this.setState({ total, next, operation });
    };

    const { total, next, operation } = this.state;

    const inputValue = () => {
      if (next) {
        return next;
      }
      if (operation) {
        return operation;
      }
      if (total) {
        return total;
      }
      return 0;
    };

    return (
      <div className="container">
        <div className="calculator">
          <div className="display">
            <p className="input">{inputValue()}</p>
          </div>
          <div className="btn-layout">
            {calValues.flat().map((v) => {
              if (v === 'x' || v === '-' || v === '÷' || v === '+' || v === '=') {
                return (
                  <button
                    key={shortid.generate()}
                    className="btn sign-btn"
                    type="button"
                    onClick={btnHandler}
                  >
                    {v}
                  </button>
                );
              }
              if (v === 0) {
                return (
                  <button
                    key={shortid.generate()}
                    className="btn zero"
                    type="button"
                    onClick={btnHandler}
                  >
                    {v}
                  </button>
                );
              }
              return (
                <button key={shortid.generate()} className="btn" type="button" onClick={btnHandler}>
                  {v}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
