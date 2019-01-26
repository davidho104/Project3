import React, { Component } from "react";
import ManagerPage from "../components/ManagerPage";
import Chart from "react-google-charts";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

let str = "Summary Page"

// Set User Table options
const options = ({
  title: "Incorrect Answers",
  width: "100%",
  height: "400px",
  chartArea: { width: '80%', height: '400px' },
  legend: "none"
});

class Summary extends Component {
  state = {
    userId: 0,
    totalQuestions: 0,
    userName: '',
    table: []
  };

  componentDidMount() {
    this.countQuestions();
    this.tabledata1();
    this.userName();
  };

  countQuestions = () => {
    // console.log();
    API.getData2()
    .then(res => { 
      // console.log(res.data);
      let numberOfQuestions = res.data.length;
      console.log("number of questions: " + numberOfQuestions)
      this.setState({ 
        totalQuestions: numberOfQuestions
      })
    })
    .catch(err => console.log(err));
  };

  userName = () => {
    API.getData3()
    .then(res => { 
      console.log("here is the data for name");
      console.log(res.data);
      let UserFullName = '';
      let numberOfUsers = res.data.length;
      for (let i = 0; i < numberOfUsers; i++) {
        // console.log("id of the user");
        // console.log(this.state.userId);
        if (this.state.userId +1 === res.data[i].id) {
          UserFullName = res.data[i].firstName + ' ' + res.data[i].lastName;
          // console.log(UserFullName);
        } else {
          // console.log("Its false");
        }
      }
      console.log("The User's full name is");
      console.log(UserFullName);
      this.setState({ 
        userName: UserFullName
      })
    })
    .catch(err => console.log(err));
  };

  tabledata1 = () => {
    API.getData3()
    .then(res => { 
      console.log("here is the data for user table")
      console.log(res.data);
      let userIdNumber = this.state.userId;
      let arr = [["Question Number", "Incorrect Answers", "Correct Answer"]];

      // console.log("here is the data for name");
      // console.log(res.data);
      // let UserFullName = '';
      // let numberOfUsers = res.data.length;
      // for (let i = 0; i < numberOfUsers; i++) {
      //   // console.log("id of the user");
      //   // console.log(this.state.userId);
      //   if (this.state.userId +1 === res.data[i].id) {
      //     UserFullName = res.data[i].firstName + ' ' + res.data[i].lastName;
      //     // console.log(UserFullName);
      //   } else {
      //     // console.log("Its false");
      //   }
      // }
      // console.log("The User's full name is");
      // console.log(UserFullName);
      // this.setState({ 
      //   userName: UserFullName
      // })


      // for (let i = 0; i < numberOfUsers; i++) {
      //   let temUserArr = [];
      //   temUserArr.push(res.data[i].firstName);
      //   // console.log("temp array");
      //   // console.log(temUserArr);
      //   let numberOfQuestions = res.data[0].results.length;
      //   // console.log("numberOfQuestions");
      //   // console.log(numberOfQuestions);
      //   let tempQuestionArr = [];
      //   // console.log("i and j");
      //   for (let j = 0; j < numberOfQuestions; j++) {
      //     // console.log(i + " and " + j);
      //     // HOW TO MAKE IT WORK WHEN USER ID IS ABSENT!
      //     if (res.data[i].results[j] === undefined) {
      //       break;
      //     }
      //     if (res.data[i].results[j].score === 0 ) {
      //       // console.log("score");
      //       // console.log(res.data[i].results[j].score);
      //       let tempQuestion = res.data[i].results[j].quizId;
      //       tempQuestionArr.push(tempQuestion);
      //     }
      //   } 
      //   // Stringify tempQuestionArr
      //   let tempQuestionList = tempQuestionArr.toString()
      //   temUserArr.push(tempQuestionList);
      //   // console.log("temUserArr");
      //   console.log(temUserArr);
      //   arr3.push(temUserArr);
      // }
      // console.log("arr3");
      // console.log(arr3)
      // this.setState({ 
      //   table: arr3
      // })
    })
    .catch(err => console.log(err));
  };

  // 0:
  // createdAt: "2019-01-24T18:31:28.000Z"
  // departmentId: null
  // email: "michael@dm.com"
  // firstName: "Michael"
  // id: 1
  // lastName: "Scott"
  // permissionId: 1
  // phone: "570-123-0001"
  // picture: "michael.png"
  // results: Array(8)
  // 0: {id: 1, userId: 1, quizId: 1, userAnswer: "100", score: 0, …}
  // 1: {id: 2, userId: 1, quizId: 2, userAnswer: "3", score: 1, …}
  // 2: {id: 3, userId: 1, quizId: 3, userAnswer: "don't know", score: 0, …}
  // 3: {id: 4, userId: 1, quizId: 4, userAnswer: "don't know", score: 0, …}
  // 4: {id: 5, userId: 1, quizId: 5, userAnswer: "There is no room D", score: 1, …}
  // 5: {id: 6, userId: 1, quizId: 6, userAnswer: "Gray", score: 0, …}
  // 6: {id: 7, userId: 1, quizId: 7, userAnswer: "Sam", score: 0, …}
  // 7: {id: 8, userId: 1, quizId: 8, userAnswer: "A former employee named Carl who has been hiding in the building for years.", score: 1, …}
  // length: 8
  // __proto__: Array(0)
  // updatedAt: null
  // username: "michael"
  // __proto__: Object
  // 1: {id: 2, username: "jim", firstName: "Jim", lastName: "Halpert", email: "jim@dm.com", …}
  // 2: {id: 3, username: "dwight", firstName: "Dwight", lastName: "Schrute", email: "dwight@dm.com", …}
  // 3: {id: 4, username: "pam", firstName: "Pam", lastName: "Beasley", email: "pam@dm.com", …}
  // 4: {id: 5, username: "standley", firstName: "Stanley", lastName: "Hudson", email: "standley@dm.com", …}
  // 5: {id: 6, username: "phyllis", firstName: "Phyllis", lastName: "Lapin", email: "phylllis@dm.com", …}
  // 6: {id: 7, username: "angela", firstName: "Angela", lastName: "Martin", email: "angela@dm.com", …}
  // 7: {id: 8, username: "oscar", firstName: "Oscar", lastName: "Gutierrez", email: "oscar@dm.com", …}
  // 8: {id: 9, username: "kevin", firstName: "Kevin", lastName: "Malone", email: "kevin@dm.com", …}
  // 9: {id: 10, username: "creed", firstName: "Creed", lastName: "Bratton", email: "creed@dm.com", …}
  // length: 10
  // __proto__: Array(0)


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
            <h1>{this.state.userName}</h1>
              <h2>
                here is your answers and the correct answer for each wrong question
              </h2>
            </Jumbotron>
          </Col>
        </Row>

        {/* https://react-google-charts.com/table-chart */}

            {/* Table */}
        <div size="md-12 text-center">
            <Chart
              width={'500px'}
              height={'300px'}
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
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Summary;
