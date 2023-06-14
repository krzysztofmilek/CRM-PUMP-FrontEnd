import React from "react";
import Menu from "./Menu";
import { Container } from "react-bootstrap";
import "../css/Settings.css";
import SettingsInfo from "./SettingsInfo";
import Footer from "./Footer";

const Settings = () => {
  return (
    <Container>
      <Menu />
      <SettingsInfo />
      <Footer />
    </Container>
  );
};
export default Settings;
