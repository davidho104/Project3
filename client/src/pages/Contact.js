import React from "react";
import NavTabsManager from "../components/NavTabsManager";
import { Container } from "../components/Grid";
import '../style.css';

function Contact(props) {
  return (
    <Container fluid>
      <NavTabsManager />
      <div className='opacContainer'>
      <h1>Contact Page</h1>
      <p>
        For questions or concerns, contact Jump-Start at 804-698-5430.
      </p>
      </div>
    </Container>
  );
}

export default Contact;
