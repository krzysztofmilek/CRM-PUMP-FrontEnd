import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [onchangeData,  setOnchangeData] = useState([]);



  const getData = async () => {
    const viewPlain = await axios.get("http://localhost:8080/plain");
    setData(viewPlain.data);
    console.log(viewPlain.data);
  };

 

  const getPlain = (e) =>
  setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.styczen]: e.target.value,
      
   })
    
    );
    console.log(onchangeData)


  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Imię Nazwisko</th>
          <th>Styczeń</th>
          <th>Luty</th>
          <th>Marzec</th>
        </tr>
      </thead>
      <tbody>
        {data.map((use, index) => (
          <tr key={index}>
            <td>
              <input
                name="name"
                value={use.name}
                type="text"
                onChange={getPlain}
                placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="styczen"
                value={use.styczen}
                type="text"
                onChange={ getPlain}
                
                placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="luty"
                value={use.luty}
                type="text"
                onChange={getPlain}
                placeholder="Type Name"
              />
            </td>
            <td>
              <input
                name="marzec"
                value={use.marzec}
                type="text"
                onChange={getPlain}
                placeholder="Type Name"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;

