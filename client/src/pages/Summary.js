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
    userId: 1,
    totalQuestions: 0,
    userName: '',
    table: []
  };

  componentDidMount() {
    this.countQuestions();
    this.userName();
    this.tabledata1();
    // this.userIDTest();
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

// 0:
  // answer: "2"
  // categoryId: null
  // choices: "0, 2, 4, Leave Early"
  // createdAt: "2019-01-24T14:32:10.000Z"
  // id: 1
  // nextId: null
  // question: "If work hours end at 5:00 pm, how many hours after work should you stay to convince the people you are a real employee?"
  // typeId: null
  // updatedAt: null
  // __proto__: Object
// 1:
  // answer: "3"
  // categoryId: null
  // choices: "1, 3, 13, People here are always helpful"
  // createdAt: "2019-01-24T14:32:11.000Z"
  // id: 2
  // nextId: null
  // question: "How many times can you ask your coworkers to help you before they start to deliberately sabotage your efforts?"
  // typeId: null
  // updatedAt: null
  // __proto__: Object

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
                here are your answers and the correct answer for each wrong question
              </h2>
            </Jumbotron>
          </Col>
        </Row>

        {/* https://react-google-charts.com/table-chart */}

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
