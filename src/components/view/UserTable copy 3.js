import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const UserTable = () => {
  const [data, setData] = useState([]);
  const [plain, setPlain] = useState([]);

  const getData = async () => {
    const viewPlain = await axios.get("http://localhost:8080/plain");
    setData(viewPlain.data);
    console.log(viewPlain.data);
  };

   const Zmien = (e, index) => {
    const { name, value } = e.target;
    const editData = data.map((item) =>
      item.index === index && name ? { ...item, [name]: value } : item
    );
    setPlain(editData);
  }; 

  const getPlain = (e, index) =>
    setData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
      [e.target.styczen]: e.target.value,
      [e.target.luty]: e.target.value,
      [e.target.marzec]: e.target.value,

      // [e.target.confirmPassword]: e.target.value,
    }));

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
          <tr key={use._id}>
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
                onChange={(e) => getPlain(e, index)}
                
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
                onChange={(e) => Zmien(e, index)}
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

/* const onChange = (e, index) => {
  const { name, value } = e.target;
  const editPlains = plains.map((item) =>
    item.index === index && name ? { ...item, [name]: value } : item
  );
  setPlains(editPlains);
}; 

   <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
           {plain
           .filter((use) => {
                return use.active === true;
              })
              .map((use, index) => (
            <tr>
              <td key={index}>
                <input
                  name="name"
                  value={use.name}
                  type="text"
                 // onChange={(e) => onChange(e, index)}
                  placeholder="Type Name"
                />
              </td>
            </tr>
          ))}
        </tbody> 
      </table>
    </div>

*/
