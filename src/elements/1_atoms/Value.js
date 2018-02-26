import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

class Value extends Component {
  render() {
    const { content } = this.props;

    return (
      <Text fontSize='2.5rem' fontWeight='900' content={content} {...this.props} />
    );
  }
}

export default Value;