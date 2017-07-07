import React from 'react';
import PropTypes from 'prop-types';
import { injectStyle } from 'styletron-utils';



function removeInline(reactEl,styletron){
  let newChildrens;
  if(reactEl.props.children){
    if(reactEl.props.children instanceof Array){
      newChildrens = [];
      Object.keys(reactEl.props.children).forEach(function(key) {
        const childReactEl = reactEl.props.children[key];
        newChildrens.push(removeInline(childReactEl,styletron));
      });
    }else if(reactEl.props.children instanceof Object){
      let childReactEl = reactEl.props.children;
        newChildrens = removeInline(childReactEl,styletron);
    }else{
      newChildrens = reactEl.props.children;
    }
  }
  const {style, className, ...others} = reactEl.props;
  let newProps = {style: null};
  if(style){
    let newClassName = injectStyle(styletron, style);
    newProps.className = [newClassName,(className|| "")].join(' ');
  }
  
  return React.cloneElement(reactEl,newProps,newChildrens);
}

const noInline = (Component) => {
  const StyledElement = (props, { styletron }) => {
    return removeInline(Component,styletron);
  };

  StyledElement.contextTypes = {
    styletron: PropTypes.object.isRequired,
  };

  return StyledElement;
};

export default noInline;
