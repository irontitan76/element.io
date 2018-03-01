import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import './Button.css';

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
    const ROOT_CLASS = 'btn';
    const { type } = this.props;
    const classes = classnames(
      ROOT_CLASS,
      {
        [`${ROOT_CLASS}--danger`]: type === 'danger',
        [`${ROOT_CLASS}--default`]: type === 'default',
        [`${ROOT_CLASS}--info`]: type === 'info',
        [`${ROOT_CLASS}--success`]: type === 'success',
        [`${ROOT_CLASS}--warning`]: type === 'warning'
      }
    );

    return this.setState({ classes });
  }

  render() {
    const { className, tag } = this.props;
    const { classes } = this.state;
    
    return React.createElement(
      tag,
      {
        className: `${classes}${className ? ` ${className}` : ''}`,
        ..._.omit(this.props, ['children', 'className', 'tag', 'type'])
      },
      this.props.children
    );
  }
}

Button.defaultProps = {
  tag: 'button',
  type: 'none'
}

Button.propTypes = {
  tag: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Button;