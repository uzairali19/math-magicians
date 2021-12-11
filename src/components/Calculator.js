import React, { useState } from 'react';
import shortid from 'shortid';
import calculate from './logic/calculate';

const calValues = [
  ['AC', '+-', '%', '÷'],
  [7, 8, 9, 'x'],
  [4, 5, 6, '-'],
  [1, 2, 3, '+'],
  [0, '.', '='],
];

const Calculator = () => {
  const [handlers, setValue] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const btnHandler = (btn) => {
    const value = btn.target.innerText;
    setValue(calculate(handlers, value));
  };

  const { total, next, operation } = handlers;

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
      <h1>Lets do some Math!</h1>
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
};

export default Calculator;
