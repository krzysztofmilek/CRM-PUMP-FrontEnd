import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "../css/UserTable.css"
import { Table } from "react-bootstrap";


const UserTable = () => {
  const [data, setData] = useState([]);
  const [onchangeData, setOnchangeData] = useState([]);

  const getData = async () => {
    const viewPlain = await axios.get("http://localhost:8080/plain/");
    setData(viewPlain.data);
  };

  const getPlain = (e) =>
    setOnchangeData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));


  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <Table >
      <thead>
        <tr>
          <th>Imię Nazwisko</th>
          <th>Styczeń</th>
          <th>Luty</th>
          <th>Marzec</th>
          <th>Kwiecień</th>
          <th>Maj</th>
          <th>Czerwiec</th>
          <th>Lipiec</th>
          <th>Sierpień</th>
          <th>Wrzesień</th>
          <th>Październik</th>
          <th>Listopad</th>
          <th>Grudzień</th>
          <th>Suma</th>
          <th>Ustaw</th>
        </tr>
      </thead>
      <tbody>
        {data.map((use, index) => (
          <tr key={index}>
            <td>
              <input
              className="inputUserTable"
                name="name"
                defaultValue={use.name || ""}
                type="text"
                onChange={getPlain}
            
              />
            </td>
            <td>
              <input className="inputUserTableMonth"
                name="styczen"
                defaultValue={use.january || 0}
                type="text"
                onChange={getPlain}
               
              
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="luty"
                defaultValue={use.february || 0}
                type="text"
                onChange={getPlain}
            
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="marzec"
                defaultValue={use.march || 0}
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="kwiecien"
                defaultValue={use.april || 0 }
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="maj"
                defaultValue={use.may || 0 }
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="czerwiec"
                defaultValue={use.june || 0 }
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="lipiec"
                defaultValue={use.july || 0 }
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="sierpien"
                defaultValue={use.august || 0 }
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="wrzesien"
                defaultValue={use.september || 0}
                type="text"
                onChange={getPlain}
         
              />  
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="pazdziernik"
                defaultValue={use.october || 0}
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="listopad"
                defaultValue={use.november || 0}
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>
            <input className="inputUserTableMonth"
                name="grudzien"
                defaultValue={use.december || 0}
                type="text"
                onChange={getPlain}
         
              />
            </td>
            <td>{
            use.january + use.february + use.march + use.april + use.may
            + use.june + use.july + use.august + use.september + use.october + use.november + use.december
            }
            
            
            </td>
            <td>
            <img className="imgUserTable" src="https://img.icons8.com/ultraviolet/40/null/checked--v1.png" alt="update"/>
            </td>

          </tr>
         
         
        ))
        
       
        }
      </tbody>
    </Table>
  );
};

export default UserTable;
