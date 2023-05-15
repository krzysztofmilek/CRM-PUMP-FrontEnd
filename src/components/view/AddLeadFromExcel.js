import React, { useState } from "react";
import axios from "axios";

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
      console.log(response);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input id="file-field" type="file" name="kolaborant" />
      <input type="submit" value="submit" />
    </form>
  );
};

export default AddLeadFromExcel;
