import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite/no-important';

class NavModal extends Component {
  constructor() {
    super();

    this.state = {
      style: {}
    };
  }

  componentWillMount() {
    const {
      bgColor,
      bottom,
      btnFontSize,
      btnMargin,
      btnPosition,
      btnRight,
      btnTop,
      color,
      fontSize,
      height,
      left,
      overflowX,
      pad,
      position,
      right,
      textDecor,
      textDisplay,
      textHoverColor,
      textPad,
      textTransition,
      top,
      transition,
      type,
      width,
      zIndex
    } = this.props;

    // height: 0, what changes
    // left: ''
    // right: ''
    // top: top || type === 'top' ? 0 : 'auto',
    // bottom: bottom || type === 'bottom' ? 0 : 'auto'
    // width: '100%'

    // open => height to height%
    const h = type === 'top' || type === 'bottom';

    // bottom: bottom || type === 'bottom' ? 0 : 'auto',
    // height: height || h ? '0' : '100%',
    // left: left || type === 'left' ? 0 : 'auto',
    // right: right || type === 'right' ? 0 : 'auto',
    // top: top || type === 'top' ? 0 : 'auto',
    // width: width || h ? '100%' : '0'

    this.setState({
      style: {
        div: {
          backgroundColor: bgColor,
          bottom: type === 'bottom' ? 0 : bottom,
          height,
          left: type === 'left' ? 0 : left,
          overflowX,
          padding: pad,
          position,
          right: type === 'right' ? 0 : right,
          top: top !== 'bottom' ? 0 : top,
          transition,
          width: 0,
          zIndex
        },
        hover: {
          ':hover': {
            color: textHoverColor
          }
        },
        a: {
          color,
          display: textDisplay,
          fontSize,
          padding: textPad,
          textDecoration: textDecor,
          transition: textTransition
        },
        btn: {
          fontSize: btnFontSize,
          margin: btnMargin,
          position: btnPosition,
          right: btnRight,
          top: btnTop
        }
      }
    });
  }

  open() {
    const { style, style: { div } } = this.state;
    const { height, opacity, push, type, width } = this.props;
    const side = type.toLowerCase().charAt().toLowerCase() + type.slice(1);
    const sideCapitalized = type.toLowerCase().charAt().toUpperCase() + type.slice(1);

    const tempStyle = StyleSheet.create({
      body: { backgroundColor: opacity ? 'rgba(0,0,0,0.4)' : 'initial' },
      root: push ? {
        transition: `margin-${side} .5s`,
        [`margin${sideCapitalized}`]: width || '20%'
      } : {}
    });

    document.body.className = css(tempStyle.body);
    document.getElementById('root').className = css(tempStyle.root);

    this.setState({
      style: {
        ...style,
        div: { ...div, width: width || '20%' }
      }
    });
  }

  close() {
    const { style, style: { div } } = this.state;
    const { push, type } = this.props;
    const side = type.toLowerCase().charAt().toLowerCase() + type.slice(1);
    const sideCapitalized = type.toLowerCase().charAt().toUpperCase() + type.slice(1);

    const tempStyle = StyleSheet.create({
      body: { backgroundColor: 'initial' },
      root: push ? {
        transition: `margin-${side} .5s`,
        [`margin${sideCapitalized}`]: '0'
      } : {}
    });

    document.body.className = css(tempStyle.body);
    document.getElementById('root').className = css(tempStyle.root);

    this.setState({
      style: {
        ...style,
        div: { ...div, width: '0' }
      }
    });
  }

  render() {
    const { style } = this.state;
    const classes = StyleSheet.create(style);

    return (
      <div>
        <button onClick={() => this.open()}>Open</button>
        <div id='sideNavId' className={css(classes.div)}>
          <a className={css(classes.a, classes.btn, classes.hover)}
            onClick={() => this.close()}>&times;
          </a>
          <a href='/' className={css(classes.a, classes.hover)}>About</a>
          <a href='/' className={css(classes.a, classes.hover)}>Services</a>
          <a href='/' className={css(classes.a, classes.hover)}>Clients</a>
          <a href='/' className={css(classes.a, classes.hover)}>Contact</a>
        </div>
      </div>

    );
  }
}

NavModal.defaultProps = {
  bgColor: '#111',
  bottom: 'auto',
  btnFontSize: '36px',
  btnMargin: '0 0 0 50px',
  btnPosition: 'absolute',
  btnRight: '25px',
  btnTop: 0,
  color: '#818181',
  fontSize: '25px',
  height: '100%',
  left: 'auto',
  opacity: false,
  overflowX: 'hidden',
  pad: '60px 0 0 0',
  position: 'fixed',
  push: true,
  right: 'auto',
  textDecor: 'none',
  textDisplay: 'block',
  textHoverColor: '#f1f1f1',
  textPad: '8px 8px 8px 32px',
  textTransition: '0.3s',
  top: 'auto',
  transition: '0.5s',
  type: 'left',
  width: '20%',
  zIndex: 1
}

NavModal.propTypes = {
  bgColor: PropTypes.string,
  btnFontSize: PropTypes.string,
  btnMargin: PropTypes.string,
  btnPosition: PropTypes.string,
  btnRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  btnTop: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  fontSize: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  opacity: PropTypes.bool,
  overFlowX: PropTypes.string,
  pad: PropTypes.string,
  position: PropTypes.string,
  push: PropTypes.bool,
  right: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  textDecor: PropTypes.string,
  textDisplay: PropTypes.string,
  textHoverColor: PropTypes.string,
  textPad: PropTypes.string,
  textTransition: PropTypes.string,
  top: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  transition: PropTypes.string,
  type: PropTypes.string,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  zIndex: PropTypes.number
}

export default NavModal;