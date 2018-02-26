import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

class Heading extends Component {
  render() {
    const { content } = this.props;

    return (
      <Text type='h3' content={content} {...this.props} />
    );
  }
}

export default Heading;