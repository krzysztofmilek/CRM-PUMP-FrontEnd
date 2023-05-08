import React from "react";
import { Col, Row, Form } from "react-bootstrap";
import "../css/AnaliticUserTop.css";

function AnaliticUserTop() {
  return (
    <div className="analiticUserBox">
      <Row className="">
      <Col xxl={3} xl={4} sm={12} md={6} lg={4} className="getCenter">
        <div className="analiticUserContainer">
          <h4>Lejek sprzedaży</h4>
          <hr />
          <Form.Select aria-label="Default select example">
            <option value="1">Bieżący miesiąc</option>
            <option value="2">Poprzedni miesiąc</option>
          </Form.Select>
          <br />
          <ul>
            <li> ilość wykonanych telefonów:</li>
            <li> ilość wysłanych email:</li>
            <li> ilość ofert: </li>
            <li> ilość sprzedaży:</li>
            <li> Skuteczność:</li>
          </ul>
        </div>
        </Col>
        <Col xxl={3}  xl={4} lg={4} sm={12} md={6} >
        <div className="analiticUserContainer">
          <h4>PLan miesięczny</h4>
          <hr />
          <ul>
            <li>Sprzedaż: 6</li>
            <li>Skuteczność: 25%</li>
          </ul>
        </div>
        </Col>
        <Col xxl={3} xl={4} sm={12} md={6} lg={4}>
        <div className="analiticUserContainer">
          <h4>Wskaźniki KPI</h4>
          <hr />
          <ul>
            <li>Telefony/Oferty:</li>
            <li>Telefony/Sprzedaż:</li>
            <li>Oferty/Sprzedaż:</li>
          </ul>
        </div>
        
  </Col>
  <Col xxl={3} xl={4} sm={12} md={6} lg={4}>
        <div className="analiticUserContainer">
          <h4>Zlecone zadania</h4>
          <hr />
          <ul>
            <li>Masz zleconych zadań : 0</li>
          </ul>
        </div>
      </Col> </Row>
    </div>
  );
}

export default AnaliticUserTop;
