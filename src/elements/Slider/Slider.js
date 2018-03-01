import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import classnames from 'classnames';
import './Slider.css';

import img from './img_fjords_wide.jpg';

import { Box } from '../'

class Slider extends Component {
  constructor() {
    super();
  }
  
  componentWillMount() {
    const ROOT_CLASS = 'slider';
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
  
  renderSlides(config) {
    return (
      <Fragment>
        <div className='slide fade'>
          <div className='numberText'>1 / 3</div>
          <img src={img} style={{ width: '100%' }} />
          <div className='text'>Caption Text</div>
        </div>
        <a className='prev'>&#62;</a>
        <a className='next'>&#60;</a>
      </Fragment>
    );
  }
  
  render() {
    const { classes } = this.state;

    return (
      <Fragment>
        <div className='slider'>
          <div className='slide fade'>
            <div className='numberText'>1 / 3</div>
            <img src={img} style={{ width: '100%' }} />
            <div className='text'>Caption Text</div>
          </div>
          <a className='prev'>&#10094;</a>
          <a className='next'>&#10095;</a>
        </div>
        <div style={{ textAlign: 'center' }}>
          <span className="dot" onclick="currentSlide(1)"></span> 
        </div>
      </Fragment>
    );
  }
}

export default Slider;