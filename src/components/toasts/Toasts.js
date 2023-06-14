import React from 'react';
import { Toast, ToastContainer } from "react-bootstrap";

const Toasts = (props) => {
 
  return ( 
    <ToastContainer className="p-3" position="middle-end" style={{ zIndex: 1 }}>
    <Toast    
      onClose={()=>{props.setShowWindow(false);}}
      show={props.showWindow}
      delay={3000}
      autohide 
      bg={props.bodyBackground}
     >

      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2 "
          alt=""
        />
        <strong className="me-auto">{props.title}</strong>
      </Toast.Header>
      <Toast.Body className={props.className}>{props.bodyText}</Toast.Body>
    </Toast>
  </ToastContainer>
  )
}

export default Toasts