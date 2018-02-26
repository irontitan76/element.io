import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

class Quote extends Component {
  render() {
    const { content } = this.props;

    return (
      <Text type='h4' fontStyle='italic' content={content} {...this.props} />
    )
  }
}

Quote.defaultProps = {
  type: 'h4'
}

Quote.propTypes = {
  type: PropTypes.string
}

export default Quote;