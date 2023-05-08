import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container } from "react-bootstrap";
import AnaliticUserTop from "./AnaliticUserTop";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import Menu from "./Menu";

const TableCustomers = (props) => {



  // eslint-disable-next-line
  const [cust, setCust] = useState({});

  const start = new Date().toISOString().substring(0,10);


  const handleShow = (cust) => {
    setCust(cust);
  };

  useEffect(() => {
    props.getCustomers();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
  
      <Menu />
     
      <div className="up">
        <AnaliticUserTop />
      </div>
      <div className="down">
        <hr />

        <p className="getLeft">PRZETERMINOWANE ZADANIA </p>

        <Table variant="light" hover bordered size="sm">
          <tbody>
            {props.customer
              .filter((cust) => {
                return (
                  (cust.data.slice(0,10) < start) &
                  (cust.agreement_1 === true)
                );
              })
              .map((cust, index) => (
                <tr className="red" key={index}>
                  <td className="col-3 tableFontSize">{cust.name}</td>
                  <td className="col-2 tableFontSize">{cust.phone}</td>
                  <td className="col-2 tableFontSize">{cust.email}</td>
                  <td className="col-2 tableFontSize">
                    {cust.data.slice(0,10)}
                  </td>

                  <td className="col-3 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Zobacz szczegóły zadania
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                        alt="Szczebóły"
                        onClick={() => {
                          handleShow(false);
                        }}
                      />
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <p className="getLeft"> DZISIEJSZE ZADANIA</p>
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {props.customer
              .filter((cust) => {
                return (
                  (cust.data.slice(0,10)=== start) &
                  (cust.agreement_1 === true)
                );
              })
              .map((cust, index) => (
                <tr key={index}>
                  <td className="col-3 tableFontSize">{cust.name}</td>
                  <td className="col-2 tableFontSize">{cust.phone}</td>
                  <td className="col-2 tableFontSize">{cust.email}</td>
                  <td className="col-2 tableFontSize">
                    {cust.data.slice(0,10)}
                  </td>
                  <td className="col-3 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Zobacz szczegóły zadania
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                        alt="Szczegóły"
                        onClick={() => {
                          handleShow(false);
                        }}
                      />
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <p className="getLeft"> NADCHODZĄCE ZADANIA</p>
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {props.customer
              .filter((cust) => {
                return (
                  (cust.data.slice(0,10) > start) &
                  (cust.agreement_1 === true)
                );
              })
              .map((cust, index) => (
                <tr key={index}>
                  <td className="col-3 tableFontSize">{cust.name}</td>
                  <td className="col-2 tableFontSize">{cust.phone}</td>
                  <td className="col-2 tableFontSize">{cust.email}</td>
                  <td className="col-2 tableFontSize">{cust.data.slice(0,10)}</td>
                  <td className="col-3 getCenter">
                    <OverlayTrigger
                      key="top"
                      placement="top"
                      overlay={
                        <Tooltip id="tooltip-top">
                          Zobacz szczegóły zadania
                        </Tooltip>
                      }
                    >
                      <img
                        className="imgTable"
                        src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                        alt="Szczegóły"
                        onClick={() => {
                          handleShow(false);
                        }}
                      />
                    </OverlayTrigger>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};
export default TableCustomers;
