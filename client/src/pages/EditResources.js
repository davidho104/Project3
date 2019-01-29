import React, { Component } from "react";
import ManagerPage from "../components/ManagerPage";
import NavTabsManager from "../components/NavTabsManager";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";


var str = "This is Edit Study Plan Page";

class EditResoruces extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  

  render() {
    return (
      <Container fluid>
      <NavTabsManager />
        <Row>
          <ManagerPage>
            {str}
          </ManagerPage>
        </Row>
      </Container>
    );
  }
}

export default EditResoruces;
