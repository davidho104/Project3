import React, { Component } from "react";
import ManagerPage from "../components/ManagerPage";
import NavTabsManager from "../components/NavTabsManager";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import "../style.css";

var str = "Here is where you can edit the study plans";

class EditResoruces extends Component {
  state = {
    plans: [],
    title: "",
    creator: "",
    summary: ""
  };

  

  render() {
    return (
      <Container fluid>
      <NavTabsManager />
      <div className='opacContainer'>
        <Row>
          <ManagerPage>
            {str}
          </ManagerPage>
        </Row>
        </div>
      </Container>
    );
  }
}

export default EditResoruces;
