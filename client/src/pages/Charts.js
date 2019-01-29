import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import NavTabsManager from "../components/NavTabsManager";

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
      console.log(arr1)
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
      console.log(arr2);
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
      // console.log(res.data);
      let numberOfUsers = res.data.length;
      let arr3 = [["First Name", "Last Name", "Incorrect Answers"]];
      for (let i = 0; i < numberOfUsers; i++) {
        let temUserArr = [];
        temUserArr.push(res.data[i].firstName);
        // console.log("temp array");
        // console.log(temUserArr);
        temUserArr.push(res.data[i].lastName);
        let numberOfQuestions = res.data[0].results.length;
        // console.log("numberOfQuestions");
        // console.log(numberOfQuestions);
        let tempQuestionArr = [];
        // console.log("i and j");
        for (let j = 0; j < numberOfQuestions; j++) {
          // console.log(i + " and " + j);
          // HOW TO MAKE IT WORK WHEN USER ID IS ABSENT!
          if (res.data[i].results[j] === undefined) {
            break;
          }
          if (res.data[i].results[j].score === 0 ) {
            // console.log("score");
            // console.log(res.data[i].results[j].score);
            let tempQuestion = res.data[i].results[j].quizId;
            tempQuestionArr.push(tempQuestion);
          }
        } 
        // Stringify tempQuestionArr
        let tempQuestionList = tempQuestionArr.toString()
        temUserArr.push(tempQuestionList);
        // console.log("temUserArr");
        console.log(temUserArr);
        arr3.push(temUserArr);
      }
      console.log("arr3");
      console.log(arr3)
      this.setState({ 
        table1: arr3
      })
    })
    .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
      <NavTabsManager />
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                Analytics
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
