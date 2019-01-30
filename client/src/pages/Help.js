import React from "react";
import NavTabsManager from "../components/NavTabsManager";
import '../style.css';
import { Container } from "../components/Grid";

function Help(props) {
  return (
    <Container fluid>
      <NavTabsManager />
      <div className='opacContainer'>
      <h1>Help Page</h1>
      <p>
        Need assistance? Refer to the manual before reaching out to upper management.
      </p>
      </div>
    </Container>
  );
}

export default Help;
