import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Text } from '../';

class Input extends Component {
  render() {
    const { content } = this.props;

    return (
      <Text type='h3' content={content} {...this.props} />
    );
  }
}

export default Input;