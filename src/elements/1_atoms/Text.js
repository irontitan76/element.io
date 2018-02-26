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
    const {
      color,
      content,
      fontFamily,
      fontSize,
      fontStyle,
      fontVariant,
      fontWeight,
      letterSpacing,
      lineHeight,
      scheme /* Uppercase, Lowercase, Camelcase, Somewhat duplicate of textTransform */,
      textAlign,
      textDecoration,
      textDecorationColor,
      textDecorationStyle,
      textJustify,
      textOverflow,
      textShadow,
      textTransform,
      type,
      whiteSpace,
      wordBreak,
      wordSpacing,
      wordWrap
    } = this.props;

    const style = StyleSheet.create({
      atom: {
        color,
        fontFamily,
        fontSize,
        fontStyle,
        fontVariant,
        fontWeight,
        letterSpacing,
        lineHeight,
        textAlign,
        textDecoration,
        textDecorationColor,
        textDecorationStyle,
        textJustify,
        textOverflow,
        textShadow,
        textTransform,
        whiteSpace,
        wordBreak,
        wordSpacing,
        wordWrap
      }
    });

    this.setState({
      style,
      content: content ? this.breakLine(content, scheme) : null,
    })
  }

  render() {
    const { style: { atom } } = this.state;
    const { type } = this.props;

    return createElement(
      type,
      {
        className: css(atom),
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
  color: '#333',
  fontFamily: 'Open Sans',
  fontSize: '1rem',
  fontStyle: 'normal',
  fontVariant: 'unset',
  fontWeight: 'normal',
  letterSpacing: 'normal',
  lineHeight: 'normal',
  scheme: '',
  textAlign: 'left',
  textDecoration: 'none',
  textDecorationColor: 'initial',
  textDecorationStyle: 'solid',
  textJustify: 'auto',
  textOverflow: 'ellipsis',
  textShadow: 'none',
  textTransform: 'none',
  type: 'div',
  whiteSpace: 'normal',
  wordBreak: 'normal',
  wordSpacing: 'normal',
  wordWrap: 'normal'
};

Text.propTypes = {
  color: PropTypes.string,
  family: PropTypes.string,
  fontSize: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  fontStyle: PropTypes.string,
  fontVariant: PropTypes.string,
  fontWeight: PropTypes.string,
  letterSpacing: PropTypes.string,
  lineHeight: PropTypes.string,
  scheme: PropTypes.string,
  textAlign: PropTypes.string,
  textDecoration: PropTypes.string,
  textDecorationColor: PropTypes.string,
  textDecorationStyle: PropTypes.string,
  textJustify: PropTypes.string,
  textOverflow: PropTypes.string,
  textShadow: PropTypes.string,
  textTransform: PropTypes.string,
  type: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.func
  ]),
  whiteSpace: PropTypes.string,
  wordBreak: PropTypes.string,
  wordSpacing: PropTypes.string,
  wordWrap: PropTypes.string
};

export default Text;

