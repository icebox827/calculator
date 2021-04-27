import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = () => {
  const renderBtn = (name) => {
    <Button name={name} />
  }

  return (
    <div className="btnPannel">
      <div className="group1">
        {renderBtn('AC')}
        {renderBtn('+/-')}
        {renderBtn('%')}
        {renderBtn('/')}
      </div>
      <div className="group2">
        {renderBtn('7')}
        {renderBtn('8')}
        {renderBtn('9')}
        {renderBtn('X')}
      </div>
      <div className="group3">
        {renderBtn('4')}
        {renderBtn('5')}
        {renderBtn('6')}
        {renderBtn('-')}
      </div>
      <div className="group4">
        {renderBtn('1')}
        {renderBtn('2')}
        {renderBtn('3')}
        {renderBtn('4')}
      </div>
      <div className="group5">
        {renderBtn('0')}
        {renderBtn('.')}
        {renderBtn('=')}
      </div>
    </div>
  )
}

ButtonPanel.PropTypes = {
  result: PropTypes.string,
};

ButtonPanel.defaultProps = {
  result: '0',
}

export default ButtonPanel;