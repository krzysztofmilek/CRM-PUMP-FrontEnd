import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

import { Container } from "react-bootstrap";
import Menu from "./Menu";
import "../css/TableCustomers.css";
import Footer from "./Footer";
import axios from "axios";
import ActionInfo from "./ActionInfo";
import OverlayTrig from "../overLay/OverlayTrig";

const TableCustomers = (props) => {
  const [actions, setActions] = useState([]);
  const [idAction, setIdAction] = useState({});
  const [showAction, setShowAction] = useState(true);
  const [showAttachment, setShowAttachment] = useState(true);
  const [showOffer, setShowOffer] = useState(true);
  const [showWindow, setShowWindow] = useState("hidden");

  const getIdUser = JSON.parse(localStorage.getItem("user"));
  const start = new Date().toISOString().substring(0, 10);

  const getDataAction = (act) => {
    setIdAction(act);
    setShowAction(false);
    setShowWindow("show");

    act.fileName === undefined
      ? setShowAttachment(true)
      : setShowAttachment(false);

    act.nameOffer === undefined 
    ? setShowOffer(true) 
    : setShowOffer(false);
  };

  const getAct = async (e) => {
    const getAction = await axios.get("http://localhost:8080/action/");
    setActions(getAction.data);
  };

  useEffect(() => {
    getAct();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Menu />

      <div className="down ">
        <span className={showWindow}>
          <div>
            <p className="title">Przeglądaj zadania</p>
            <hr />

            <ActionInfo
              idAction={idAction}
              showAction={showAction}
              showAttachment={showAttachment}
              showOffer={showOffer}
            />
          </div>
        </span>
        <hr />

        <p className="getLeft title">PRZETERMINOWANE ZADANIA </p>

        <Table variant="light" hover bordered size="sm">
          <tbody>
            {actions
              .filter((act) => {
                return (
                  act.nextContactData.slice(0, 10) < start &&
                  act.user._id === getIdUser.id_user &&
                  act.status === "open"
                );
              })
              .map((act, index) => (
                <tr className="red" key={index}>
                  <td className="col-1 tableFontSize">
                    {act.nextContactData.slice(0, 10)}
                  </td>
                  <td className="col-2 tableFontSize">{act.user.name}</td>
                  <td className="col-2 tableFontSize">{act.customer?.name}</td>
                  <td className="col-1 tableFontSize">{act.customer?.phone}</td>
                  <td className="col-5 tableFontSize">
                    {act.information.slice(0, 100)}{" "}
                  </td>

                  <td className="col-1 getCenter">
                    <OverlayTrig
                      imagePath="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                      toltip="Zobacz szczegóły zadania"
                      onClick={(e) => {
                        getDataAction(act);
                      }}
                    />

                   
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
        <p className="getLeft title"> DZISIEJSZE ZADANIA</p>
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {actions
              .filter((act) => {
                return (
                  act.nextContactData.slice(0, 10) === start &&
                  act.user._id === getIdUser.id_user &&
                  act.status === "open"
                );
              })
              .map((act, index) => (
                <tr key={index}>
                  <td className="col-1 tableFontSize">
                    {act.nextContactData.slice(0, 10)}
                  </td>
                  <td className="col-2 tableFontSize">{act.user.name}</td>
                  <td className="col-2 tableFontSize">{act.customer?.name}</td>
                  <td className="col-1 tableFontSize">{act.customer?.phone}</td>
                  <td className="col-5 tableFontSize">
                    {act.information.slice(0, 100)}{" "}
                  </td>
                  <td className="col-1 getCenter">
                  <OverlayTrig
                      imagePath="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                      toltip="Zobacz szczegóły zadania"
                      onClick={(e) => {
                        getDataAction(act);
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>

        <p className="getLeft title"> NADCHODZĄCE ZADANIA</p>
        <Table variant="light" striped bordered hover className="fullWidth">
          <tbody>
            {actions
              .filter((act) => {
                return (
                  act.nextContactData.slice(0, 10) > start &&
                  act.user._id === getIdUser.id_user &&
                  act.status === "open"
                );
              })
              .map((act, index) => (
                <tr key={index}>
                  <td className="col-1 tableFontSize">
                    {act.nextContactData?.slice(0, 10)}
                  </td>
                  <td className="col-2 tableFontSize">{act.user.name}</td>
                  <td className="col-2 tableFontSize">{act.customer?.name}</td>
                  <td className="col-1 tableFontSize">{act.customer?.phone}</td>
                  <td className="col-5 tableFontSize">
                    {act.information?.slice(0, 100)}{" "}
                  </td>
                  <td className="col-1 getCenter">
                      <OverlayTrig
                      imagePath="https://img.icons8.com/external-flatart-icons-outline-flatarticons/35/null/external-user-cv-resume-flatart-icons-outline-flatarticons.png"
                      toltip="Zobacz szczegóły zadania - zadania nadchodzące"
                      onClick={(e) => {
                      getDataAction(act);
                      }}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Footer />
    </Container>
  );
};
export default TableCustomers;
