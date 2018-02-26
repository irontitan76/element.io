import { Component, createElement } from 'react';
import _ from 'lodash';
import { StyleSheet, css } from 'aphrodite/no-important';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  compoonentDidMount() {

  }
  componentWillReceiveProps() {

  }
  componentDidUpdate() {

  }
  componentWillUnmount() {

  }
  render() {
    const { align, bg, border, children, display, float, full, margin, onClick,
      pad, size, tag, textAlign } = this.props;

    let fullStyle;

    if ( full === 'horizontal' ) {
      fullStyle = {
        position: 'relative',
        maxWidth: '100%',
        width: '100vw',
        overflow: 'auto'
      }
    } else if ( fullStyle === 'vertical' ){
      fullStyle = {
        position: 'relative',
        height: '100vh',
        maxHeight: '100%',
        overflow: 'auto'
      }
    }
    else if ( full ) {
      fullStyle = {
        position: 'relative',
        maxWidth: '100%',
        width: '100vw',
        height: '100vh',
        maxHeight: '100%',
        overflow: 'auto'
      }
    }

    const style = StyleSheet.create({
      box: {
        align,
        background: bg,
        border,
        display,
        float,
        margin,
        padding: pad,
        textAlign,
        ...fullStyle
      }
    });

    return createElement(
      tag,
      {
        ..._.omit(this.props, ['align', 'bg', 'border', 'children', 'display',
          'float', 'full', 'margin', 'onClick', 'pad', 'size', 'tag', 'textAlign']),
        className: css(style.box)
      },
      [children]
    );
  }
}

Box.defaultProps = {
  tag: 'div'
}

export default Box;