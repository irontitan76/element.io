import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css, StyleSheet } from 'aphrodite/no-important';

class Button extends Component {
  constructor() {
    super();

    this._onClick = this._onClick.bind(this);
    this._onHover = this._onHover.bind(this);
  }

  _onClick() {

  }

  _onHover() {

  }

  componentWillMount() {
    const { type, outline, style } = this.props;
    let button, hover;

    let typeColors = {
      danger:   [ '#f44336', '#da190b', '#fff' ],
      default:  [ '#e7e7e7', '#dddddd', '#000' ],
      info:     [ '#2196fc', '#0b7dda', '#fff' ],
      success:  [ '#4caf50', '#46a049', '#fff' ],
      warning:  [ '#ff9800', '#e68a00', '#fff' ],
      none:     [ '#e7e7e7', '#dddddd', '#fff' ],
    };

    let color = typeColors[type];
    let outlineText = (type === 'default' || type === 'none') ? '#000' : color[0];
    let hoverText = (type === 'default' || type === 'none')  ? '#000' : '#fff';

    button = outline
      ? { ...style, border: `2px solid ${color[0]}`, color: outlineText }
      : { ...style, backgroundColor: color[0], color: outlineText };
    hover = outline
      ? { backgroundColor: color[0], color: '#fff' }
      : { backgroundColor: color[1], color: hoverText };

    return this.setState({ style: button, hover });
  }

  render() {
    const { className, tag } = this.props;
    const { button, hover } = StyleSheet.create({
      button: { ...this.props.style, ...this.state.style },
      hover: { ':hover': this.state.hover }
    });

    const classes = !!className
      ? css(button, hover) + ` ${className}`
      : css(button, hover);

    return React.createElement(
      tag,
      {
        className: classes,
        ..._.omit(this.props, ['children', 'className', 'style'])
      },
      this.props.children
    );
  }
}

Button.defaultProps = {
  type: 'none',
  outline: false,
  onClick: null,
  style: {
    backgroundColor: '#fff',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    fontSize: '1rem',
    padding: '12px 28px',
    width: '100%'
  },
  tag: 'button'
}

export default Button;