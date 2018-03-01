import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link as ReactLink, NavLink as ReactNavLink } from 'react-router-dom';

import { Block } from './';

class Link extends Component {
  render() {
    const { content, to } = this.props;

    return (
      <Block
        tag={ReactLink}
        to={to}
        style={{ textDecoration: 'none' }}
        content={content}
        {...this.props}
      />
    );
  }
}

Link.defaultProps = {
  to: '#'
}

export default Link;