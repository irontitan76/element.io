import React, { Component, createElement } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { StyleSheet, css } from 'aphrodite/no-important';

class Text extends Component {
  constructor() {
    super();

    this.state = {};
  }

  breakLine(text, scheme) {
    let regex = /(\\n)/g;
    return text.split(regex).map((line, index) => {
      return line.match(regex) ? <br key={'key_' + index} />
        : this.format(line, scheme);
    });
  };

  format(content, scheme) {
    if ( scheme === 'upper' ) {
      content = content.toUpperCase();
    } else if ( scheme === 'lower' ) {
      content = content.toLowerCase();
    } else if ( scheme === 'camelCase' ) {
      content = content.split(' ').map(word => {
        return word.charAt().toUpperCase() + word.slice(1);
      }).join('');
    }

    return content;
  }

  componentWillMount() {
    const { content, style, scheme, type } = this.props;
    const styleSheet = StyleSheet.create({text: style});

    this.setState({
      styleSheet,
      content: typeof content === 'string'
        ? this.breakLine(content, scheme)
        : content,
    })
  }

  render() {
    const { content, styleSheet: { text } } = this.state;
    const { type } = this.props;

    return createElement(
      type,
      {
        className: css(text),
        ..._.omit(this.props, Object.keys(Text.defaultProps))
      },
      [
        this.state.content,
        this.props.children
      ]
    );
  }
}

Text.defaultProps = {
  content: null,
  style: {
    color: '#333',
    fontFamily: 'Open Sans',
    fontSize: '1rem',
    fontStyle: 'normal',
    fontVariant: 'unset',
    fontWeight: 'normal',
    letterSpacing: 'normal',
    lineHeight: 'normal',
    textAlign: 'left',
    textDecoration: 'none',
    textDecorationColor: 'initial',
    textDecorationStyle: 'solid',
    textJustify: 'auto',
    textOverflow: 'ellipsis',
    textShadow: 'none',
    textTransform: 'none',
    whiteSpace: 'normal',
    wordBreak: 'normal',
    wordSpacing: 'normal',
    wordWrap: 'normal'
  },
  scheme: '',
  type: 'div',
};

Text.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.string
  ]),
  style: PropTypes.object,
  scheme: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Text;

