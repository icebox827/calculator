import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  // eslint-disable-next-line react/prop-types
  const {name, clickHandler}  = props;
  const handleClick = () => clickHandler(name);
  return <button type="button" className="btn" onClick={handleClick} >{name}</button>
};

Button.PropTypes = {
  name: PropTypes.string,
}

Button.defaultProps = {
  name: '',
}

export default Button;