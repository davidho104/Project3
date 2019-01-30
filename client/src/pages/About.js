import React from "react";
import NavTabsManager from "../components/NavTabsManager";
import { Container } from "../components/Grid";
import '../style.css';

function About() {
  return (
    <Container fluid>
      <NavTabsManager />
      <div className='opacContainer'>
      <h1>About Page</h1>
      <p>
        This is the manager page. Refer to the documentation for any questions.
      </p>
      </div>
    </Container>
  );
}

export default About;
