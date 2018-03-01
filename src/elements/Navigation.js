import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite/no-important';

class Navigation extends Component {
  constructor() {
    super();

    this.state = {
      style: {}
    };
  }

  componentWillMount() {
    const {
      activeColor,
      activeBg,
      bgColor,
      bottom,
      color,
      float,
      height,
      hoverBg,
      hoverColor,
      left,
      listStyleType,
      margin,
      overflow,
      pad,
      position,
      right,
      textAlign,
      textPad,
      textDecor,
      top,
      width,
      type
    } = this.props;

    const h = type === 'top' || type === 'bottom';

    this.setState({
      style: StyleSheet.create({
        ul: {
          backgroundColor: bgColor,
          bottom: bottom || type === 'bottom' ? 0 : 'unset',
          height: height || h ? 'unset' : '100vh',
          left: left || type === 'left' ? 0 : 'unset',
          listStyleType,
          margin,
          overflow,
          padding: pad,
          position,
          right: right || type === 'right' ? 0 : 'unset',
          top: top || type === 'top' ? 0 : 'unset',
          width: width || h ? '100%' : '20%'
        },
        li: {
          float: float || h ? 'left' : 'none'
        },
        a: {
          color,
          display: 'block',
          hover: {
            ':hover': {
              backgroundColor: hoverBg,
              color: hoverColor
            }
          },
          padding: textPad || h ? '14px 16px' : '8px 16px',
          textAlign: textAlign || h ? 'center' : 'left',
          textDecoration: textDecor
        },
        active: {
          activeColor: activeColor,
          backgroundColor: activeBg
        },
        sticky: {
          position: 'fixed',
          top: 0
        }
      })
    });
  }

  _route(routes) {
    return routes.map((route, key) => {
      return <Route
        key={`key_${key}`}
        component={route.component}
        exact={route.exact}
        path={route.to} />
    });
  }

  _handleSticky() {
    // What if multiple navbars...
    const { style: { sticky } } = this.state;
    const nav = document.getElementById('navbar');
    const offset = nav.offsetTop;

    if (window.pageYOffset >= offset) {
      nav.classList.add(css(sticky));
    } else {
      nav.classList.remove(css(sticky));
    }
  }

  _renderItems() {
    const { items } = this.props;
    const { style: { a, active, li } } = this.state;

    return items.map((item, key) => {
        return <li key={`key_${key}`} className={css(li)}>
          <NavLink
            activeClassName={css(active)}
            className={css(a)}
            to={item.to}>
            {item.name}
          </NavLink>
        </li>

    });
  }

  render() {
    const { items, position } = this.props;
    const { style: { ul } } = this.state;

    window.onscroll = () => position === 'sticky' ? this._handleSticky() : null;

    return (
      <Router>
        <nav id='navbar'>
          <ul className={css(ul)}>
            { this._renderItems() }
          </ul>
          <Switch>
            { this._route(items) }
          </Switch>
        </nav>
      </Router>
    );
  }
}

Navigation.defaultProps = {
  activeBg: '#4caf50',
  activeColor: '#000',
  bgColor: '#f1f1f1',
  color: '#000',
  hoverBg: '#555',
  hoverColor: '#fff',
  listStyleType: 'none',
  margin: 0,
  overflow: 'hidden',
  pad: 0,
  position: 'static',
  textDecor: 'none',
}

Navigation.propTypes = {
  activeBg: PropTypes.string,
  activeColor: PropTypes.string,
  bgColor: PropTypes.string,
  bottom: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  color: PropTypes.string,
  float: PropTypes.string,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  hoverBg: PropTypes.string,
  hoverColor: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    to: PropTypes.string,
    name: PropTypes.string,
    component: PropTypes.func
  })),
  left: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  listStyleType: PropTypes.string,
  margin: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  overflow: PropTypes.string,
  pad: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  position: PropTypes.string,
  right: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  textAlign: PropTypes.string,
  textPad: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  textDecor: PropTypes.string,
  top: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string
}

export default Navigation;