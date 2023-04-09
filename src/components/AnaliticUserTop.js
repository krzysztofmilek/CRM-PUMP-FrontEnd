import React from 'react'
import { Form } from 'react-bootstrap';

function AnaliticUserTop() {
  return (
    <div className="analiticUserBox">

   <div className="analiticUserContainer">
        <h4>Lejek sprzedaży</h4>
       <hr />
       <Form.Select aria-label="Default select example">
         <option value="1">Bieżący miesiąc</option>
           <option value="2">Poprzedni miesiąc</option>
       </Form.Select><br />
        <ul>
            <li>  ilość wykonanych telefonów:</li>
            <li>  ilość wysłanych email:</li>
            <li>  ilość ofert: </li>
            <li>  ilość sprzedaży:</li>
            <li>  Skuteczność:</li>
        
        </ul>
        </div>
        <div className="analiticUserContainer">
     <h4>PLan miesięczny</h4>
     <hr />
     <ul>
        <li>Sprzedaż: 6</li>
        <li>Skuteczność: 25%</li>
     </ul>
     </div>
     <div className="analiticUserContainer">
             <h4>Wskaźniki KPI</h4>
     <hr />
     <ul>
        <li>Telefony/Oferty:</li>
        <li>Telefony/Sprzedaż:</li>
        <li>Oferty/Sprzedaż:</li>
     </ul>
     
     </div>

     <div className="analiticUserContainer">
             <h4>Zlecone zadania</h4>
     <hr />
     <ul>
        <li>Masz zleconych zadań : 0</li>
     
     </ul>
     
     </div>


     </div>
  )
}

export default AnaliticUserTop