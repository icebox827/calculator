import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  // eslint-disable-next-line react/prop-types
  const {name}  = props;
  return <button type="button" className="btn" onClick={handleClick}  >{name}</button>
};

function handleClick(name) {
  return clickHandler
};


Button.PropTypes = {
  name: PropTypes.string,
}

Button.defaultProps = {
  name: '',
}

export default Button;