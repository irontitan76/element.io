import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

class Caption extends Component {
  render() {
    const { content } = this.props;

    return (
      <Text fontSize='0.8rem' content={content} {...this.props} />
    );
  }
}

export default Caption;