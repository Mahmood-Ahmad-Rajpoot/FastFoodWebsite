import React, { memo } from "react";
import { Button } from "antd";
import { PropTypes } from "prop-types";
const CustomButton = (props) => {
  
  return (
    <Button onClick={props.btnHandler} className={props.btnStyles+ ' z-0'}>
     
        {props.btnText} 
      
     {props.btnIcon && <img className="w-[30px] h-[30px] " src={props.btnIcon}  alt='cart' /> }
    </Button>
  );
};
CustomButton.propTypes = {
  btnStyles: PropTypes.string,
  btnText: PropTypes.string,
  btnIcon: PropTypes.string,
  btnHandler: PropTypes.func,
};

export default CustomButton;
