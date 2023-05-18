import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import  '../css/AddLeadFromExcel.css';

import { Toast, ToastContainer } from "react-bootstrap";

const AddLeadFromExcel = () => {
  const [showToast, setShowToast] = useState(false); 
  const[ showToastSuccess, setShowToastSuccess] =useState(false);

  const handleSubmit = (e) => {
 
 
    e.preventDefault();
    const file = document.getElementById("file-field").files[0];
  
    try {
      if (file === undefined || file === null){
      setShowToast(true)
  return
      
      }else{
  
    const url = "http://localhost:8080/uploadFiles";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const data = new FormData();
     data.append("kolaborant", file);
    axios.post(url, data, config);
    setShowToastSuccess(true);
    
  }}catch (error) {
    console.error(error)
    //res.status(500);
    console.log("błąd 500");
    return
   
  }};

  return (
<div>
<ToastContainer
              className="p-3"
              position="middle-end"
              style={{ zIndex: 1 }}
            >
              <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={4000}
                autohide
                bg="danger"
             
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2 "
                    alt=""
                  />
                  <strong className="me-auto">UWAGA</strong>
                </Toast.Header>
                <Toast.Body  className={'text-white' }><strong>BŁĄD WYBIERZ PLIK</strong></Toast.Body>
              </Toast>
            </ToastContainer>

            <ToastContainer
              className="p-3"
              position="middle-end"
              style={{ zIndex: 1 }}
            >
              <Toast
                onClose={() => setShowToastSuccess(false)}
                show={showToastSuccess}
                delay={4000}
                autohide
                bg="success"
             
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2 "
                    alt=""
                  />
                  <strong className="me-auto text-black ">Success</strong>
                </Toast.Header>
                <Toast.Body className={'text-white'}  ><strong>Dodano pomyślnie</strong></Toast.Body>
              </Toast>
            </ToastContainer>
    <p className="tittle">Załaduj plik - giełda</p>
    <hr />
    <form onSubmit={handleSubmit}>
         
      <Form.Control id="file-field" type="file" name="kolaborant" accept=".xlsx, .xls" />
      <p className="getRight top10" >
      <input type="submit" value="Wyslij Dane"  className="btn btn-outline-success" />
      </p>
    </form>
    </div>
  );
};

export default AddLeadFromExcel;
