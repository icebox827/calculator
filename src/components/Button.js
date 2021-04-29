import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const {name, clickHandler}  = props;

  const handleClick = e => {
    clickHandler(e.target.value);
  };

  return <button type="button" className="btn" onClick={handleClick} value={name} >{name}</button>
};

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func,
}

Button.defaultProps = {
  name: '',
}

export default Button;