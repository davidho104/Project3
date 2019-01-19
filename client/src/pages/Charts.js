import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

const data = [
    ["Year", "Visitations"],
    ["Bob", 10],
    ["Tom", 14],
    ["Tim", 16],
    ["Eddy", 22]
  ];

const graph1 = data;

const graph2 = data;

class Charts extends Component {
    state = {
        graph1: []
    };

    componentDidMount() {
        this.graphdata1();
        this.graphdata2();
      }

    graphdata1 = () => {
        console.log();
        API.getData()
        .then(res => { console.log(res.data);
            let arr0 = [["Employee", "Score"]];
            for (let i = 0; i < res.data.length; i++) {
                let temArr = [];
                console.log(res.data[i].firstName);
                temArr.push(res.data[i].firstName);
                temArr.push(parseInt(res.data[i].sum));
                console.log(temArr);
                arr0.push(temArr);
            } 
            console.log(arr0)
            this.setState({ 
                graph1: arr0 })
        })
        .catch(err => console.log(err));
    };

        //this needs to be fixed!!!
  graphdata2 = () => {
    console.log();
    API.getData2()
      .then(res => { console.log(res);
        // this.setState({ 
        //     books: res.data, title: "", author: "", synopsis: "" })
    })
      .catch(err => console.log(err));
  };




// class Charts extends Component {
//   state = {
//     book: {}
//   };
// };
//   // When this component mounts, grab the book with the _id of this.props.match.params.id
//   // e.g. localhost:3000/books/599dcb67f0f16317844583fc
//   componentDidMount() {
//     API.getBook(this.props.match.params.id)
//       .then(res => this.setState({ book: res.data }))
//       .catch(err => console.log(err));
//   }

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
        <div className="Chart">
            <Chart chartType="BarChart" width="100%" height="400px" data={data} />
        </div>

        <div size="md-12 text-center">
            {/* the 1st chart */}
            <Chart chartType="BarChart" id="chart" width="100%" height="400px" data={this.state.graph1} />
        </div>

        <div size="md-12 text-center">
            {/* the 2nd chart */}
            <Chart chartType="BarChart" id="chart" width="100%" height="400px" data={graph2} />
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
