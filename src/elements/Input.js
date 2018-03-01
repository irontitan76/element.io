import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Block } from '../';

class TextInput extends Component {
  render() {
    const { content, type, label } = this.props;

    return [
      <label for='input'>{label}</label>,
      <input type={type} name='input' style={this.props}/>
    ];
  }
}

TextInput.defaultProps = {
  border: '1px solid #ccc',
  boxSizing: 'border-box',
  display: 'inline-block',
  margin: '8px 0',
  padding: '12px 20px',
  width: '100%'
}

export default TextInput;


/*
  Types
    - Checkbox
    - Date
    - Email
    - File
    - NumberInput
    - RadioInput
    - RangeInput
    - Search
    - TextInput

*/