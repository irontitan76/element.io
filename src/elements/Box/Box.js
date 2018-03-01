import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css, StyleSheet } from 'aphrodite/no-important';
import { checkForFlatStyles } from './../utils';

class Box extends Component {
  componentWillMount() {
    const { content, style, scheme } = this.props;
    const flattenedStyle = checkForFlatStyles(Box.defaultProps.style, this.props);
    const boxStyle = { ...style, ...flattenedStyle };

    this.setState({
      boxStyle,
      flattenedStyle,
      content: typeof content === 'string'
        ? this.breakLine(content, scheme)
        : content,
    });
  }

  render() {
    const { className, tag } = this.props;
    const { boxStyle, flattenedStyle  } = this.state;
    const { box } = StyleSheet.create({ box: boxStyle });

    const classes = !!className ? css(box) + ` ${className}` : css(box);

    return React.createElement(
      tag,
      {
        className: classes,
        ..._.omit(this.props,
          [ 'tag', 'children', 'className', 'style', ..._.keys(flattenedStyle) ])
      },
      this.props.children
    );
  }
}

Box.defaultProps = {
  style: {
    backgroundAttachment: 'scroll',
    backgroundBlendMode: 'normal',
    backgroundClip: 'border-box',
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    backgroundOrigin: 'padding-box',
    backgroundPosition: '0% 0%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'auto',
    borderStyle: 'none',
    borderWidth: 'medium',
    bottom: 'auto',
    boxShadow: 'none',
    boxSizing: 'content-box',
    color: '#333',
    height: 'auto',
    left: 'auto',
    margin: 'auto',
    overflowX: 'hidden',
    overflowY: 'hidden',
    padding: 0,
    position: 'static',
    right: 'auto',
    top: 'auto',
    transition: '0.5s',
    width: 'auto',
    zIndex: 'auto'
  },
  tag: 'div',
}

export default Box;

/*
  Flex Containers
   alignContent,
   alignItems,
   alignSelf,
   justifyContent,
   flex,
   flexBasis,
   flexDirection,
   flexFlow,
   flexGrow,
   flexShrink,
   flexWrap
  Animated Containers
   animation,
   animationDelay,
   animationDirection,
   animationDuration,
   animationFillMode,
   animationIterationCount,
   animationName,
   animationPlayState,
   animationTimingFunction
  All Containers
   1 background,
   backgroundAttachment,
   backgroundBlendMode,
   backgroundClip,
   backgroundColor,
   backgroundImage,
   backgroundOrigin,
   backgroundPosition,
   backgroundRepeat,
   backgroundSize,
   1 border,
   borderColor,
   borderImage,
   borderImageOutset,
   borderImageRepeat,
   borderImageSlice,
   borderImageSource,
   borderImageWidth,
   borderRadius,
   borderSpacing,
   borderStyle,
   borderWidth,
   border[Bottom/Left/Right/Top],
   border[Bottom/Left/Right/Top]Color,
   border[Bottom/Left/Right/Top]Style,
   border[Bottom/Left/Right/Top]Width,
   border[Bottom/Top]LeftRadius,
   border[Bottom/Top]RightRadius,
   1 bottom,
   boxDecorationBreak,
   1 boxShadow,
   1 boxSizing,
   breakAfter,
   breakBefore,
   breakInside,
   clear,
   1 color,
   columnCount,
   columnFill,
   columnGap,
   columnRule,
   columnRuleColor,
   columnRuleStyle,
   columnRuleWidth,
   columnSpan,
   columnWidth,
   columns,
   content,
   cursor,
   filter,
   1 float,
   1 height,
   1 left,
   1 margin,
   marginBottom,
   marginLeft,
   marginRight,
   marginTop,
   maxHeight,
   maxWidth,
   minHeight,
   minWidth,
   opacity,
   order,
   overflowX,
   overflowY,
   1 padding,
   paddingBottom,
   paddingLeft,
   paddingRight,
   paddingTop,
   1 position,
   1 right,
   1 top,
   transition,
   transitionDelay,
   transitionDuration,
   transitionProperty,
   transitionTimingFunction,
   1 verticalAlign,
   visibility,
   1 width,
   zIndex
  Tables
   borderCollapse,
   captionSide,
   emptyCells,
   tableLayout,
  Text
    textAlign,
    textAlignLast,
    textDecoration,
    textDecorationColor,
    textDecorationLine,
    textDecorationStyle
  Grid
    grid,
    girdArea,
    gridAutoColumns,
    gridAutoFlow,
    gridAutoRows,
    gridColumn,
    gridColunEnd,
    gridColumnGap,
    gridColumnStart,
    gridGap,
    gridRow,
    gridRowEnd,
    gridRowGap,
    gridRowStart,
    gridTemplate,
    gridTemplateAreas,
    gridTemplateColumns,
    gridTemplateRows



*/