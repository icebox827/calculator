import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const {result} = props;
  return <h1 className="display">{result.total}</h1>;
};

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;