import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import NavTabsManager from "../components/NavTabsManager";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import { Input, FormBtn2 } from "../components/InputForm";
// import { FormBtn } from "../components/Form";

let question = "";
let choices = "";
let answer = "";

class EditQuiz extends Component {
  state = {
    result: [],
    search: "",
    question: "",
    choices: "",
    answer: ""
  };
  // this.handleClick = this.handleClick.bind(this)


  componentDidMount() {
    this.loadQuizzes();
  }


  loadQuizzes = query => {
    API.getQuizData()
      .then(res => {
        console.log(res.data);
        console.log(res.data[0].id);
        this.setState({ result: res.data });
      })
      .catch(err => console.log(err));
  };



  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };




  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.loadQuizzes();
  };


  handleSaveSubmit = event => {
    event.preventDefault();
    console.log(question)
    API.saveQuizData({
      question: this.state.question,
      choices: this.state.choices,
      answer: this.state.answer
    })
      .then(res => { 
        console.log(res) 
      })
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <NavTabsManager />
        <Row>
          <Col size="md-8">
            {this.state.result.map(item => {

              return <Card key={item.id} heading={item.question}>
              
              <div>{item.choices} </div>
              <div>{item.answer}</div>
              </Card>

            })}



          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
            <Card heading="Input">
              <Input
                value={this.state.search}
                // value={this.state.question}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                name="question"
              />
              {/* <Input
                value={this.state.choices}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                name="choices"
              />
              <Input
                value={this.state.answer}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
                name="answer"
              /> */}
              <FormBtn2

                onClick={() => {

                  this.handleSaveSubmit();
                }}
              >
                Save
                    </FormBtn2>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditQuiz;


