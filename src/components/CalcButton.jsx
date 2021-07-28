import React, { Component } from 'react';
import { Button } from '@material-ui/core';

class CalcButton extends Component {
  componentDidMount() {
  }

  render() {
    const { makeSum } = this.props;
    return (
      <Button variant='contained' color='primary' onClick={makeSum}>Calcular</Button>
    );
  }
}

export default CalcButton;