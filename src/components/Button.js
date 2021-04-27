import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const name  = props;
  return (
    <button type="button" className="btn">{name}</button>
  )
};


Button.PropTypes = {
  name: PropTypes.string,
};

Button.defaultProps = {
  name: '',
}

export default Button;