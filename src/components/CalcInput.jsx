import React, { Component } from 'react';
import { TextField } from '@material-ui/core';

class CalcInput extends Component {
  handleChange = (e) => {
    const {changeInputFunction} = this.props;
    const inputValue = Number(e.target.value);
    if (!isNaN(inputValue)) {
      changeInputFunction(inputValue)
    }
  };

  render() {
    const { label, value } = this.props;
    return (
      <div style={{ marginBottom: 8 }}>
        <TextField
          label={label}
          value={value}
          onChange={this.handleChange} />
      </div>
    );
  }
}

export default CalcInput;