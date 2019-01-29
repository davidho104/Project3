import React, { Component } from "react";
import ResourcesPage from "../components/ResourcesPage";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import NavTabsEmployee from "../components/NavTabsEmployee";



class Resources extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  
  render() {
    return (
      <Container fluid>
      <NavTabsEmployee />
        <Row>
          <ResourcesPage>
          </ResourcesPage>
        </Row>
      </Container>
    );
  }
}

export default Resources;
