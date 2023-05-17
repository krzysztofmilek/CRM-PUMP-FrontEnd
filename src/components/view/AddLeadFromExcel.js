import React, { useState } from "react";
import axios from "axios";
import { Form } from "react-bootstrap";
import  '../css/AddLeadFromExcel.css';

const AddLeadFromExcel = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = document.getElementById("file-field").files[0];

    const url = "http://localhost:8080/uploadFiles";
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const data = new FormData();
     data.append("kolaborant", file);
    axios.post(url, data, config).then((response) => {
      console.log(file);
     
    });
  };

  return (
<div>

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
