import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel(props) {
  const { clickHandler } = props;
  
  const handleClick = e => {
    clickHandler(e);
  };

  return (
    <div className="btnPannel">
      <div className="group1">
        <Button name="AC" clickHandler={handleClick} />
        <Button name="+/-" clickHandler={handleClick} />
        <Button name="%" clickHandler={handleClick} />
        <Button name="/" clickHandler={handleClick} />
      </div>
      <div className="group2">
        <Button name="7" clickHandler={handleClick} />
        <Button name="8" clickHandler={handleClick} />
        <Button name="9" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick}/>
      </div>
      <div className="group3">
        <Button name="4" clickHandler={handleClick}/>
        <Button name="5" clickHandler={handleClick}/>
        <Button name="6" clickHandler={handleClick}/>
        <Button name="-" clickHandler={handleClick}/>
      </div>
      <div className="group4">
        <Button name="1" clickHandler={handleClick}/>
        <Button name="2" clickHandler={handleClick}/>
        <Button name="3" clickHandler={handleClick}/>
        <Button name="+" clickHandler={handleClick}/>
      </div>
      <div className="group5">
        <Button name="0" clickHandler={handleClick}/>
        <Button name="." clickHandler={handleClick}/>
        <Button name="=" clickHandler={handleClick}/>
      </div>
    </div>
  )
}

ButtonPanel.propTypes = {
  result: PropTypes.string,
  clickHandler: PropTypes.func,
};

ButtonPanel.defaultProps = {
  result: '0',
}

export default ButtonPanel;