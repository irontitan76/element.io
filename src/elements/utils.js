import React from 'react';
import _ from 'lodash';

export const checkForFlatStyles = (defaults, props) => {
  let flattenedStyle = {};

  Object.keys(props).forEach(key => {
    if ( _.includes(_.keys(defaults), key)) {
      flattenedStyle[key] = props[key];
    }
  });

  return flattenedStyle;
}

export const breakLine = (text, scheme) => {
  let regex = /(\\n)/g;
  return text.split(regex).map((line, index) => (
    line.match(regex) ? <br key={'key_' + index} /> : line ));
};