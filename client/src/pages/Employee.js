import React, { Component } from "react";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import NavTabsEmployee from "../components/NavTabsEmployee";
import Jumbotron from "../components/Jumbotron";
import "../style.css";

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: props.id,
      uid: props.uid,
      firstname: props.firstname,
      picture: '',
      userName: '',
      table: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }


  render() {
    return (
      <Container>
        <NavTabsEmployee />
        <div className='opacContainer2'>

          <Row>
            <Jumbotron>
              <h2>Greetings! {this.state.firstname}. Welcome to your first day at the Dunder Mifflin Paper Company.</h2>
              <div class="instructions1">
                <h2>This is your first assignment: click on Quiz tab above.</h2>
              </div>
            </Jumbotron>
          </Row>
            <Row>
            </Row>
        </div>
      </Container>
        );
      }
    }
    
    export default Employee;
