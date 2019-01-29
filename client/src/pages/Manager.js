import React, { Component } from "react";
import NavTabsManager from "../components/NavTabsManager";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import Chart from "react-google-charts";
import { Row, Container } from "../components/Grid";
// import Jumbotron from "../components/Jumbotron";


// Set User Table options
const options = ({
  width: "100%",
  height: "400px",
  chartArea: { width: '80%', height: '400px' },
  legend: "none"
});


class Manager extends Component {

  constructor(props) {
    super(props);
    this.state = {
      uid: props.uid,
      firstname: props.firstname,
      totalUsers: 0,
      totalQuestions: 0,
      table: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.tabledata1();
  }

  tabledata1 = () => {
    console.log();
    API.getData3()
      .then(res => {
        console.log("here is the data for table 3")
        // console.log(res.data);
        let numberOfUsers = res.data.length;
        let arr3 = [["User Name", "First Name", "Last Name", "Phone", "Email"]];
        for (let i = 0; i < numberOfUsers; i++) {
          let temUserArr = [];
          // temUserArr.push(res.data[i].firstName);
          // console.log("temp array");
          // console.log(temUserArr);
          temUserArr.push(res.data[i].username);
          temUserArr.push(res.data[i].firstName);
          temUserArr.push(res.data[i].lastName);
          temUserArr.push(res.data[i].phone);
          temUserArr.push(res.data[i].email);
          // console.log("temUserArr");
          console.log(temUserArr);
          arr3.push(temUserArr);
        }
        console.log("arr3");
        console.log(arr3)
        this.setState({
          table: arr3
        })
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <NavTabsManager />
        <div
          style={{
            position: 'absolute', left: '50%',
            transform: 'translate(-20%)',
            background: "white"
          }}
        >
          <Row>
            <h1>Hi, {this.state.firstname},</h1>
          </Row>
          <Row>
            <h1>All Employees:</h1>
          </Row>
          <Row>
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
          </Row>
        </div>
      </Container>
    );
  }
}

export default Manager;
