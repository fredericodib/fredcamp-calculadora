import React, { Component } from 'react';

class CalcScreen extends Component {
  render() {
    const {sum} = this.props;
    return (
      <h1>
        Resultado: {sum}
      </h1>
    );
  }
}

export default CalcScreen;