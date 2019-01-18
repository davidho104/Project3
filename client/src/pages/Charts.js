import React, { Component } from "react";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
import Chart from "react-google-charts";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";

const data = [
  ["Year", "Visitations", { role: "style" }],
  ["2010", 10, "color: gray"],
  ["2020", 14, "color: #76A7FA"],

  ["2030", 16, "color: blue"],
  ["2040", 22, "stroke-color: #703593; stroke-width: 4; fill-color: #C5A5CF"],
  [
    "2050",
    28,
    "stroke-color: #871B47; stroke-opacity: 0.6; stroke-width: 8; fill-color: #BC5679; fill-opacity: 0.2"
  ]
];

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

class Charts extends Component {
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
