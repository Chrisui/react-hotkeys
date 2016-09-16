import React from 'react';

const FocusTrap = React.createClass({

  propTypes: {
    onFocus: React.PropTypes.func,
    onBlur: React.PropTypes.func,
    component: React.PropTypes.any,
    children: React.PropTypes.node
  },

  getDefaultProps() {
    return {
      component: 'div'
    };
  },

  render() {
    const {
      component: Component,
      children,
      ...props
    } = this.props;

    return (
      <Component tabIndex="-1" style={{ outline: 'none' }} {...props}>
        {children}
      </Component>
    );
  }

});

export default FocusTrap;
