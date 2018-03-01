import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { StyleSheet, css } from 'aphrodite/no-important';
import { breakLine, checkForFlatStyles } from '../utils';

class Block extends Component {
  componentWillMount() {
    const { content, style, scheme } = this.props;
    const flattenedStyle = checkForFlatStyles(Block.defaultProps.style, this.props);
    const textStyle = { ...style, ...flattenedStyle };

    this.setState({
      flattenedStyle,
      textStyle,
      content: typeof content === 'string'
        ? breakLine(content, scheme)
        : content,
    });
  }

  render() {
    const { className, tag } = this.props;
    const { flattenedStyle, textStyle } = this.state;
    const { text } = StyleSheet.create({ text: textStyle });
    const classes = !!className ? css(text) + ` ${className}` : css(text);

    return React.createElement(
      tag,
      {
        className: classes,
        ..._.omit(this.props,
          [ 'children', 'className', 'style', ..._.keys(flattenedStyle) ])
      },
      [
        this.state.content,
        this.props.children
      ]
    );
  }
}

Block.defaultProps = {
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
  tag: 'div',
};

Block.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
    PropTypes.string
  ]),
  style: PropTypes.object.isRequired,
  scheme: PropTypes.string.isRequired,
  tag: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.func.isRequired
  ])
}

export default Block;

