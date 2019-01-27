import React, { Component } from "react";
import ManagerPage from "../components/ManagerPage";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
<<<<<<< HEAD
import Chart from "react-google-charts";
import Jumbotron from "../components/Jumbotron";
=======
import NavTabsEmployee from "../components/NavTabsEmployee";
>>>>>>> 532f642f38dec1b1be3b7034a15bd0cde3e90931

let str = "Profile Page"

// Set User Table options
const options = ({
  title: "Employee Profile",
  width: "100%",
  height: "400px",
  chartArea: { width: '80%', height: '400px' },
  legend: "none"
});

class Profile extends Component {
  state = {
    userId: 1,
    userName: '',
    table: []
  };

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
      let numberOfUsers = res.data.length;
      for (let i = 0; i < numberOfUsers; i++) {
        // console.log("id of the user");
        // console.log(this.state.userId);
        if (this.state.userId === res.data[i].id) {
          userFullName = res.data[i].firstName + ' ' + res.data[i].lastName;
          // console.log(userFullName);
        } else {
          // console.log("Its false");
        }
      }
      console.log("The User's full name is");
      console.log(userFullName);
      this.setState({ 
        userName: userFullName
      })
    })
    .catch(err => console.log(err));
  };

  tabledata1 = () => {
    API.getData3()
    .then(res => { 
      console.log("here is the data for user table")
      console.log(res.data);
      let arr = [["Number", "Question", "Incorrect Answers", "Correct Answer"]];
      let numberOfUsers = res.data.length;
      // console.log("id of the user");
      // console.log(this.state.userId +1);
      for (let i = 0; i < numberOfUsers; i++) {
        if (this.state.userId === res.data[i].id) {
          // console.log("this is the id of the user");
          // console.log(res.data[i].id);
          console.log("this is the name of the user");
          console.log(res.data[i].firstName);
          let numberOfQuest = res.data[i].results.length;
          // console.log("number of questions");
          // console.log(numberOfQuest);
          for (let j = 0; j < numberOfQuest; j++) {
            let temQuestArr = [];
            if (res.data[i].results[j].score === 0) {
              API.getQuizData()
              .then(res2 => {
                // console.log("here is the data for quizzes")
                // console.log(res2.data);
                let tempQuestion = '';
                let tempAnswer = '';
                let numberOfQuestions = res2.data.length;
                // console.log("The number of question is...")
                // console.log(numberOfQuestions);
                for (let k = 0; k < numberOfQuestions; k++) {
                  // console.log("Question ID numbers are");
                  // console.log(res2.data[k].id);
                  if (res.data[i].results[j].id === res2.data[k].id) {
                    temQuestArr.push(res.data[i].results[j].id);
                    tempQuestion = res2.data[k].question;
                    // console.log("Questions are");
                    // console.log(tempQuestion);
                    temQuestArr.push(tempQuestion);
                    temQuestArr.push(res.data[i].results[j].userAnswer);
                    tempAnswer = res2.data[k].answer;
                    temQuestArr.push(tempAnswer);
                    // console.log("Array Row");
                    // console.log(temQuestArr);
                    arr.push(temQuestArr);
                  }
                };
              })
              .catch(err => console.log(err));
            }
          }
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


  render() {
    return (
      <Container fluid>
      <NavTabsEmployee />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>{this.state.userName}</h1>
            </Jumbotron>
          </Col>
        </Row>
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
      </Container>
    );
  }
}

export default Profile;
