import React from 'react';

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
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="display">
            <p>0</p>
          </div>
          <div className="btn-layout">
            {calValues.flat().map((v) => {
              if (v === 'x' || v === '-' || v === '÷' || v === '+' || v === '=') {
                return (
                  <button key={v.id} className="btn sign-btn" type="button">
                    {v}
                  </button>
                );
              }
              if (v === 0) {
                return (
                  <button key={v.id} className="btn zero" type="button">
                    {v}
                  </button>
                );
              }
              return (
                <button key={v.id} className="btn" type="button">
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
