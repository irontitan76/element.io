import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Text from './Text';

class Paragraph extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  componentWillMount() {
    const { content, n } = this.props;
    const arr = content.match(new RegExp('.{1,' + n + '}', 'g'));

    this.setState({
      text: arr.map(i => i.concat('\\n')).join('')
    });
  }

  render() {
    const { text } = this.state;

    return <Text content={text}  />;
  }
}

Paragraph.defaultProps = {
  n: 120
}

Paragraph.propTypes = {
  n: PropTypes.number
}

export default Paragraph;