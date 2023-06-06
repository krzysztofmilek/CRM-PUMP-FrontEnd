import React from 'react';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const OverlayTrig = (props) => {

  return (
    <OverlayTrigger
    key="top"
    placement="top"
    overlay={
      <Tooltip id="tooltip-top">
      {props.toltip}
      </Tooltip>
    }
  >
    <img
      className="imgTable"
      src={props.imagePath}
      alt="zdjęcie"
      onClick={props.onClick}
     
    />
    
  </OverlayTrigger>
  )
}

export default OverlayTrig