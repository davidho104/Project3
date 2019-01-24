import React, { Component } from "react";
import QuizPage from "../components/QuizPage";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";



var str = "Quiz Page";

class Quiz extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.questionData1();

    this.loadBooks();
  }

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


  questionData1 = () => {
    console.log();
    API.getQuizData()
    .then(res => { 
      console.log("here is the data for quizes")
      console.log(res.data);
      let numberOfQuestions = res.data.length;
      console.log(numberOfQuestions);
      // for (let i = 0; i < numberOfUsers; i++) {
      //   let temUserArr = [];
      //   temUserArr.push(res.data[i].firstName);
      //   // console.log("temp array");
      //   // console.log(temUserArr);
      //   let numberOfQuestions = res.data[0].results.length;
      //   // console.log("numberOfQuestions");
      //   // console.log(numberOfQuestions);
      //   let tempQuestionArr = [];
      //   console.log("i and j");
      //   for (let j = 0; j < numberOfQuestions; j++) {
      //     console.log(i + " and " + j);
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
      //   console.log("temUserArr");
      //   console.log(temUserArr);
      //   arr3.push(temUserArr);
      // }
      // console.log("arr3");
      // console.log(arr3)
      // this.setState({ 
      //   questionArray: arr3
      // })
    })
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
        <Row>
          <QuizPage>
            {str}
          </QuizPage>
        </Row>
      </Container>
    );
  }
}

export default Quiz;
