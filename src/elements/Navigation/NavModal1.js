import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite/no-important';

import { Box, Button } from '../';

class NavModal extends Component {
  constructor() {
    super();

    this.state = {
      started: false
    };
  }

  componentWillMount() {
    const { openTo, closeTo, opacity, push, type, containerStyle, linkStyle, hoverStyle, btnStyle } = this.props;
    const side = type.charAt().toLowerCase() + type.slice(1);
    const sideCapitalized = type.charAt().toUpperCase() + type.slice(1);
    const sideA = type === 'top' || type === 'bottom' ? 'height': 'width';
    const sideB = type === 'top' || type === 'bottom' ? 'width': 'height';

    const closed = {
      body: { backgroundColor: 'initial' },
      root: push ? {
        transition: `margin-${side} .5s`,
        [`margin${sideCapitalized}`]: closeTo
      } : {}
    };

    const opened = {
      body: { backgroundColor: opacity ? 'rgba(0,0,0,0.4)' : 'initial' },
      root: push ? {
        transition: `margin-${side} .5s`,
        [`margin${sideCapitalized}`]: openTo
      } : {}
    };

    document.getElementById('root').className = css(StyleSheet.create(closed).root);

    switch ( type ) {
      case 'top':
        containerStyle.top = 0;
        containerStyle[sideA] = closeTo;
        containerStyle[sideB] = '100%';
        break;
      case 'bottom':
        containerStyle.bottom = 0;
        containerStyle[sideA] = closeTo;
        containerStyle[sideB] = '100%';
        break;
      case 'left':
        containerStyle.left = 0;
        containerStyle[sideA] = closeTo;
        containerStyle[sideB] = '100%';
        break;
      case 'right':
        containerStyle.right = 0;
        containerStyle[sideA] = closeTo;
        containerStyle[sideB] = '100%';
        break;
      default:
        containerStyle.left = 0;
        containerStyle.top = 0;
        containerStyle.width = closeTo;
        break;
    }

    const styleSheet = {
      container: containerStyle,
      link: linkStyle,
      hover: hoverStyle,
      btn: btnStyle,
      closed,
      opened
    };

    return this.setState({ style: styleSheet });
  }

  // Create toggle
  open() {
    const { style: { container, opened } } = this.state;
    const { type, openTo } = this.props;
    const sideA = type === 'top' || type === 'bottom' ? 'height': 'width';
    const sideB = type === 'top' || type === 'bottom' ? 'width': 'height';
    const style = StyleSheet.create(opened);

    document.body.className = css(style.body);
    document.getElementById('root').className = css(style.root);

    return this.setState({
      ...this.state,
      style: {
        ...this.state.style,
        container: {
          ...container,
          [sideA]: openTo,
          [sideB]: '100%'
        }
      }
    });
  }

  close() {
    const { style: { container, closed } } = this.state;
    const { type, closeTo } = this.props;
    const sideA = type === 'top' || type === 'bottom' ? 'height': 'width';
    const sideB = type === 'top' || type === 'bottom' ? 'width': 'height';
    const style = StyleSheet.create(closed);

    document.body.className = css(style.body);
    document.getElementById('root').className = css(style.root);

    return this.setState({
      ...this.state,
      style: {
        ...this.state.style,
        container: {
          ...container,
          [sideA]: closeTo,
          [sideB]: '100%'
        }
      }
    });
  }

  render() {
    const { style: { btn, closed, container, hover, link } } = this.state;
    const style = StyleSheet.create({ btn, closed, container, hover, link });

    return (
      <Box>
        <Button type='success' onClick={() => this.open()}>Open</Button>
        <Box style={container}>
          <a style={{ cursor: 'pointer' }} className={css(style.link, style.btn, style.hover)}
            onClick={() => this.close()}>&times;
          </a>
          <a href='/' className={css(style.link, style.hover)}>About</a>
          <a href='/' className={css(style.link, style.hover)}>Services</a>
          <a href='/' className={css(style.link, style.hover)}>Clients</a>
          <a href='/' className={css(style.link, style.hover)}>Contact</a>
        </Box>

      </Box>
    );
  }
}

// containerStyle = Box
// linkStyle = Link
// btnStyle = Button

NavModal.defaultProps = {
  closeTo: 0,
  openTo: '20%',
  containerStyle: {
    backgroundColor: '#111',
    bottom: 'auto',
    height: '100%',
    left: 'auto',
    overflowX: 'hidden',
    overflowY: 'hidden',
    padding: '60px 0 0 0',
    position: 'fixed',
    right: 'auto',
    top: 'auto',
    transition: '0.5s',
    width: 'auto',
    zIndex: 1
  },
  linkStyle: {
    color: '#818181',
    display: 'block',
    fontSize: '25px',
    padding: '8px 8px 8px 32px',
    textDecoration: 'none',
    transition: '0.3s'
  },
  btnStyle: {
    fontSize: '36px',
    margin: '0 0 0 50px',
    position: 'absolute',
    right: '25px',
    top: 0
  },
  hoverStyle: {
    color: '#f1f1f1'
  },
  type: 'left',
  opacity: false,
  push: true
}

NavModal.propTypes = {

}

export default NavModal;