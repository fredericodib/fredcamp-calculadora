import React, { Component } from 'react';
import CalcInput from './CalcInput';
import CalcButton from './CalcButton';

class CalcInputs extends Component {
  render() {
    const {input1, input2, changeInput1, changeInput2, makeSum} = this.props;
    return (
      <div>
        <CalcInput
          label='Numero1'
          value={input1}
          changeInputFunction={changeInput1}
        />
        <CalcInput
          label='Numero2'
          value={input2}
          changeInputFunction={changeInput2}
        />
        <CalcButton makeSum={makeSum} />
      </div>
    );
  }
}

export default CalcInputs;