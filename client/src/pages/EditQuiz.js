import React, { Component } from "react";
import DeleteBtn from "../components/DeleteBtn";
import { Link } from "react-router-dom";
import API from "../utils/API";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import NavTabsManager from "../components/NavTabsManager";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import { Input2, FormBtn2 } from "../components/InputForm";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

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

  // NOTE: For deleting the quiz questions later
  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

        // When the form is submitted, search the database for the value of `this.state.search`
        // not working yet
  handleFormSubmit = event => {
    event.preventDefault();
    this.loadQuizzes();
  };

  
  handleSaveSubmit = event => {
    event.preventDefault();
    console.log("new question is...");
    console.log(question);

    API.saveQuizData({
      question: this.state.question,
      choices: this.state.choices,
      answer: this.state.answer
    })
      .then(res => {
        this.setState({
          question: "",
          choices: "",
          answer: ""        
        });
        console.log(res)
      })
      .then(res => this.loadQuizzes())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <NavTabsManager />
        <Jumbotron>
          <h1>Quiz Editing</h1>
        </Jumbotron>
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
            <Card heading="Add Another Question">
              <form>
                <p>Question</p>
                <Input
                  value={this.state.question}
                  onChange={this.handleInputChange}
                  // handleSaveSubmit={this.handleSaveSubmit}
                  name="question"
                />
                <p>Choices (separated by a comma) </p>
                <Input
                  value={this.state.choices}
                  onChange={this.handleInputChange}
                  // handleSaveSubmit={this.handleSaveSubmit}
                  name="choices"
                />
                <p>Answer</p>
                <Input
                  value={this.state.answer}
                  onChange={this.handleInputChange}
                  // handleSaveSubmit={this.handleSaveSubmit}
                  name="answer"
                />
                <FormBtn
                  disabled={!(this.state.question && this.state.choices && this.state.answer)}
                  onClick={this.handleSaveSubmit}
                >
                  Submit Question
              </FormBtn>
              </form>
              {/* <FormBtn2
                onClick={() => {
                  this.handleSaveSubmit();
                }}
              >
                Save
              </FormBtn2> */}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EditQuiz;


