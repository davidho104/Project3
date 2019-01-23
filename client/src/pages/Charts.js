import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

  // Set chart 1 options
  const options1 = (questions) => ({
    title: "User Scores",
    width: "100%",
    height: "400px",
    chartArea: { width: '80%', height: '400px' },
    hAxis: { 
      title: "Score", viewWindow: { 
          min: 0, 
          max: questions 
        } 
      },
    vAxis: { title: "Users", viewWindow: { min: 0 } },
    colors: ['lightgray'],
    legend: "none"
  });


// Set chart 2 options
const options2 = (user, questions) => ({
  title: "Correct Answers Per Question",
  chartArea: { width: '80%', height: '400px' },
  hAxis: { 
    title: "Number of Users who got it Right"
  , 
    viewWindow: { min: 0, max: user } 
  },
  vAxis: { title: "Question Number" },
  colors: ['lightgray'],
  legend: "none"
});

  // Set Table 1 options
  const options3 = ({
    title: "Incorrect Answers",
    width: "100%",
    height: "400px",
    chartArea: { width: '80%', height: '400px' },
    legend: "none"
  });

class Charts extends Component {
  state = {
      totalUsers: 0,
      totalQuestions: 0,
      graph1: [],
      graph2: [],
      table1: []
  };

  componentDidMount() {
    this.countQuestions();
    this.countUsers();
    this.graphdata1();
    this.graphdata2();
    this.tabledata1();
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

  countUsers = () => {
    // console.log();
    API.getData()
    .then(res => { 
      // console.log("the data")
      // console.log(res.data);
      let numberOfUsers = res.data.length;
      console.log("number of Users: " + numberOfUsers)
      this.setState({ 
        totalUsers: numberOfUsers
      })
    })
    .catch(err => console.log(err));
  };

  graphdata1 = () => {
    // console.log();
    API.getData()
    .then(res => { 
      // console.log(res.data);
      let numberOfQuestions = res.data.length;
      let arr1 = [["User Name", "Score on Test"]];
      for (let i = 0; i < numberOfQuestions; i++) {
          let temArr = [];
          // console.log(res.data[i].firstName);
          temArr.push(res.data[i].firstName);
          temArr.push(parseInt(res.data[i].sum));
          // console.log(temArr);
          arr1.push(temArr);
      } 
      // console.log(arr1)
      this.setState({ 
        graph1: arr1
      })
    })
    .catch(err => console.log(err));
  };

  //this needs to be fixed!!!
  graphdata2 = () => {
    // console.log();
    API.getData2()
    .then(res => { 
      // console.log(res.data);
      let arr2 = [];
      for (let i = 0; i < res.data.length; i++) {
          let temArr = [];
          // console.log(res.data[i].id);
          let ques = res.data[i].id.toString();
          temArr.push(ques);
          temArr.push(parseInt(res.data[i].sum));
          // console.log(temArr);
          arr2.push(temArr);
      } 
      arr2.unshift(["Question", "Number Correct"])
      // console.log(arr2);
      this.setState({ 
        graph2: arr2
      })
    })
    .catch(err => console.log(err));
  };

  tabledata1 = () => {
    console.log();
    API.getData3()
    .then(res => { 
      console.log("here is the data for table 3")
      console.log(res.data);
      let numberOfUsers = res.data.length;
      let arr3 = [["User Name", "Incorrect Answers"]];
      for (let i = 0; i < numberOfUsers; i++) {
        let temUserArr = [];
        temUserArr.push(res.data[i].firstName);
        // console.log("temp array");
        // console.log(temUserArr);
        let numberOfQuestions = res.data[0].results.length;
        // console.log("numberOfQuestions");
        // console.log(numberOfQuestions);
        let tempQuestionArr = [];
        // console.log("tempQuestionArr");
        // console.log(tempQuestionArr);
        for (let j = 0; j < numberOfQuestions; j++) {
          if ( res.data[i].results[j].score === 0) {
            let tempQuestion = res.data[i].results[j].quizId;
            tempQuestionArr.push(tempQuestion);
          }
        } 
        // NEED TO STRINGIFY tempQuestionArr

        temUserArr.push(tempQuestionArr);
        console.log("temUserArr");
        console.log(temUserArr);
        arr3.push(temUserArr);
        console.log("arr3");
        console.log(arr3);
      }
      console.log(arr3)
      this.setState({ 
        table1: arr3
      })
    })
    .catch(err => console.log(err));
  };

// 0:
//   firstName: "Michael"
//   id: 1
//   lastName: "Scott"
//   permissionId: 1
//   results: Array(5)
//     0: {id: 1, userId: 1, quizId: 1, userAnswer: "100", score: 0, …}
//     1: {id: 2, userId: 1, quizId: 2, userAnswer: "3", score: 1, …}
//     2: {id: 3, userId: 1, quizId: 3, userAnswer: "don't know", score: 0, …}
//     3: {id: 4, userId: 1, quizId: 4, userAnswer: "don't know", score: 0, …}
//     4: {id: 5, userId: 1, quizId: 5, userAnswer: "There is no room D", score: 1, …}
//   length: 5
//   1:
//     firstName: "Jim"
//     id: 2
//     lastName: "Halpert"
//     permissionId: 2
//     results: Array(5)
//       0: {id: 6, userId: 2, quizId: 1, userAnswer: "2", score: 1, …}
//       1: {id: 7, userId: 2, quizId: 2, userAnswer: "3", score: 1, …}
//       2: {id: 8, userId: 2, quizId: 3, userAnswer: "don't know", score: 0, …}
//       3: {id: 9, userId: 2, quizId: 4, userAnswer: "Throw them under the bus", score: 1, …}
//       4: {id: 10, userId: 2, quizId: 5, userAnswer: "There is no room D", score: 1, …}
//     length: 5



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Google Charts
              </h1>
            </Jumbotron>
          </Col>
        </Row>

        <div size="md-12 text-center">
            {/* the 1st chart */}
            <Chart chartType="BarChart" id="chart" 
            loader={<div>Loading Chart</div>}
            data={this.state.graph1} 
            options={options1(this.state.totalQuestions)}          
            />
        </div>

        <div size="md-12 text-center">
            {/* the 2nd chart */}
            <Chart chartType="BarChart" id="chart" 
            loader={<div>Loading Chart</div>}
            data={this.state.graph2} 
            options={
              options2(
                this.state.totalUsers, this.state.totalQuestions)} 
            width="100%" 
            height="400px"          
            />
        </div>

        {/* https://react-google-charts.com/table-chart */}

            {/* Table */}
        <div size="md-12 text-center">
            <Chart
              width={'500px'}
              height={'300px'}
              chartType="Table"
              loader={<div>Loading Chart</div>}
              data={this.state.table1}
              options={{
                // showRowNumber: true,
                options3 
              }}
              rootProps={{ 'data-testid': '1' }}
            />
        </div>


        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
  

export default Charts;