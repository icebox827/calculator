import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function ButtonPanel() {
  // eslint-disable-next-line react/prop-types
  const { clickHandler } = props;
  

  return (
    <div className="btnPannel">
      <div className="group1">
        <Button name="AC" onClick={clickHandler} />
        <Button name="+/-" onClick={clickHandler} />
        <Button name="%" onClick={clickHandler} />
        <Button name="/" onClick={clickHandler} />
      </div>
      <div className="group2">
        <Button name="7" onClick={clickHandler} />
        <Button name="8" onClick={clickHandler} />
        <Button name="9" onClick={clickHandler} />
        <Button name="x" onClick={clickHandler}/>
      </div>
      <div className="group3">
        <Button name="4" onClick={clickHandler}/>
        <Button name="5" onClick={clickHandler}/>
        <Button name="6" onClick={clickHandler}/>
        <Button name="-" onClick={clickHandler}/>
      </div>
      <div className="group4">
        <Button name="1" onClick={clickHandler}/>
        <Button name="2" onClick={clickHandler}/>
        <Button name="3" onClick={clickHandler}/>
        <Button name="+" onClick={clickHandler}/>
      </div>
      <div className="group5">
        <Button name="0" onClick={clickHandler}/>
        <Button name="." onClick={clickHandler}/>
        <Button name="=" onClick={clickHandler}/>
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