import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

class Hook extends Component {
  render() {
    const { content } = this.props;

    return (
      <Text type='a' href='#' textDecoration='none' content={content} {...this.props} />
    );
  }
}

export default Hook;