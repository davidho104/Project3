import React, { Component } from "react";
// import ManagerPage from "../components/ManagerPage";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Chart from "react-google-charts";
import NavTabsManager from "../components/NavTabsManager";


// Set User Table options
const options = ({
  title: "Employee Profile",
  width: "100%",
  height: "400px",
  chartArea: { width: '80%', height: '400px' },
  legend: "none"
});

class ProfileManager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uid: props.uid,
      userId: props.id,
      picture: '',
      userName: '',
      table: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }


  componentDidMount() {
    this.userName();
    this.tabledata1();
    // this.userIDTest();
  }

  // DOESN'T WORK, BUT DON'T KNOW WHY
  // userIDTest = id => {
  //   API.getUserID(id)
  //   .then(res => { 
  //     console.log("here is the data for UserID");
  //     console.log(res.data);
  //   })
  //   .catch(err => console.log(err));
  // };

  userName = () => {
    API.getData3()
      .then(res => {
        // console.log("here is the data for name");
        // console.log(res.data);
        let userFullName = '';
        let userPicture = '';
        let numberOfUsers = res.data.length;
        for (let i = 0; i < numberOfUsers; i++) {
          // console.log("id of the user");
          // console.log(this.state.userId);
          if (this.state.userId === res.data[i].id) {
            userFullName = res.data[i].firstName + ' ' + res.data[i].lastName;
            // console.log(userFullName);
            userPicture = res.data[i].picture;
          } else {
            // console.log("Its false");
          }
        }
        console.log("Picture Path");
        console.log(userPicture);
        console.log("The User's full name is");
        console.log(userFullName);
        this.setState({
          userName: userFullName,
          picture: userPicture
        })
      })
      .catch(err => console.log(err));
  };

  tabledata1 = () => {
    API.getData3()
      .then(res => {
        console.log("here is the data for user table")
        console.log(res.data);
        let arr = [["", ""]];
        let numberOfUsers = res.data.length;
        // console.log("id of the user");
        // console.log(this.state.userId);
        for (let i = 0; i < numberOfUsers; i++) {
          if (this.state.userId === res.data[i].id) {
            // console.log("this is the id of the user");
            // console.log(res.data[i].id);
            console.log("this is the name of the user");
            console.log(res.data[i].firstName);
            let usernameArr = [];
            usernameArr.push("User Name");
            usernameArr.push(res.data[i].username);
            arr.push(usernameArr);
            let firstNameArr = [];
            firstNameArr.push("First Name");
            firstNameArr.push(res.data[i].firstName);
            arr.push(firstNameArr);
            let lastNameArr = [];
            lastNameArr.push("Last Name");
            lastNameArr.push(res.data[i].lastName);
            arr.push(lastNameArr);
            let phoneArr = [];
            phoneArr.push("Phone Number");
            phoneArr.push(res.data[i].phone);
            arr.push(phoneArr);
            let emailArr = [];
            emailArr.push("Email");
            emailArr.push(res.data[i].email);
            arr.push(emailArr);
            console.log("Table Array");
            console.log(arr);
          }
        }
        this.setState({
          table: arr
        })
      })
      .catch(err => console.log(err));
  };

  // 0:
  // createdAt: "2019-01-24T14:32:09.000Z"
  // departmentId: null
  // email: "michael@dm.com"
  // firstName: "Michael"
  // id: 1
  // lastName: "Scott"
  // permissionId: 1
  // phone: "570-123-0001"
  // picture: "michael.png"
  // results: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // updatedAt: null
  // username: "michael"
  // __proto__: Object
  // 1:
  // createdAt: "2019-01-24T14:32:09.000Z"
  // departmentId: null
  // email: "jim@dm.com"
  // firstName: "Jim"
  // id: 2
  // lastName: "Halpert"
  // permissionId: 2
  // phone: "570-123-0002"
  // picture: "jim.png"
  // results: (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // updatedAt: null
  // username: "jim"
  // __proto__: Object


  render() {
    return (
      <Container fluid>
        <NavTabsManager />
        <div           
        style={{
            position: 'absolute', left: '50%',
            transform: 'translate(-20%)'}}
        >
        <Row>
          <Col size="md-12">
            <div>
              {/* <img src={'path/to/one.jpeg'} /> */}
              <img src={this.state.picture} height="300" alt="" />
              {/* <img src={this.state.picture} /> */}
              <h2>{this.state.userName}</h2>
            </div>
          </Col>
        </Row>
        <br></br>
        {/* Table */}
        <div size="md-12 text-center">
          <Chart
            width={'700px'}
            height={'700px'}
            chartType="Table"
            loader={<div>Loading Chart</div>}
            data={this.state.table}
            options={{
              // showRowNumber: true,
              options
            }}
            rootProps={{ 'data-testid': '1' }}
          />
        </div>
        </div>
      </Container>
    );
  }
}

export default ProfileManager;

