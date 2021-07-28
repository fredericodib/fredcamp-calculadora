import React, { Component } from 'react';
import { Container } from '@material-ui/core';
import CalcScreen from '../components/CalcScreen';
import CalcInputs from '../components/CalcInputs';

class CalcPage extends Component {
  state = {
    input1: 0,
    input2: 0,
    sum: 0,
  }

  changeInput1 = (value) => {
    this.setState({input1: value});
  }

  changeInput2 = (value) => {
    this.setState({input2: value});
  }

  makeSum = () => {
    const {input1, input2} = this.state;
    this.setState({sum: input1 + input2})
  }

  render() {
    const {input1, input2, sum} = this.state;
    return (
      <Container maxWidth='sm'>
        <CalcScreen sum={sum}/>
        <CalcInputs
          input1={input1}
          input2={input2}
          changeInput1={this.changeInput1}
          changeInput2={this.changeInput2}
          makeSum={this.makeSum}
        />
      </Container>
    );
  }
}

export default CalcPage;
