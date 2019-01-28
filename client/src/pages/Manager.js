import React, { Component } from "react";
import ManagerPage from "../components/ManagerPage";
import NavTabsManager from "../components/NavTabsManager";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Chart from "react-google-charts";
import Jumbotron from "../components/Jumbotron";

let str = "This is Manager Page";

// Set User Table options
const options = ({
  width: "100%",
  height: "400px",
  chartArea: { width: '80%', height: '400px' },
  legend: "none"
});


class Manager extends Component {
  state = {
    totalUsers: 0,
    totalQuestions: 0,
    table: []
};

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

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
      <NavTabsManager />
        <Row>
        <h1>All Employees</h1>
          <ManagerPage>
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
          </ManagerPage>
        </Row>
      </Container>
    );
  }
}

export default Manager;
