import React, { Component } from "react";
import QuizPage from "../components/QuizPage";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

let str = "Quiz Page";

// use this template
// https://codepen.io/Daanist/pen/LjLoWV

class Quiz extends Component {

  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };

  // componentDidMount() {
  //   this.questionData1();
  //   this.loadBooks();
  // }

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

  // questionData1 = () => {
  //   console.log();
  //   API.getQuizData()
  //   .then(res => { 
  //     console.log("here is the data for quizzes")
  //     console.log(res.data);
  //     let numberOfQuestions = res.data.length;
  //     console.log("The number of question is...")
  //     console.log(numberOfQuestions);
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
  // console.log("dataSet");
  // console.log(dataSet)
  // this.setState({ 
  //   dataSet: dataSet
  //     })
  //   })
  //   .catch(err => console.log(err));
  // };

  constructor(props) {
    super(props)

    let dataSet = [
      {
        question: "What is 8 x 1?",
        answers: [
          "1",
          "8",
          "16",
          "9"
        ],
        correct: 1
      },
      {
        question: "Who is Steve Jobs?",
        answers: [
          "CEO of Microsoft",
          "Barber in NY",
          "Movie Star",
          "CEO of Apple"
        ],
        correct: 3
      },
      {
        question: "Metallica is a ____ band",
        answers: [
          "Blues",
          "Hard-Rock",
          "Jazz",
          "Metal"
        ],
        correct: 3
      },
    ];

      this.state = {
        current: 0,
        dataSet: dataSet,
        correct: 0,
        incorrect: 0
      }
      this.handleClick = this.handleClick.bind(this)

  } // end constructor

  // ------ OLD STUFF -----------------------

  // loadBooks = () => {
  //   API.getBooks()
  //     .then(res =>
  //       this.setState({ books: res.data, title: "", author: "", synopsis: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  // deleteBook = id => {
  //   API.deleteBook(id)
  //     .then(res => this.loadBooks())
  //     .catch(err => console.log(err));
  // };

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.title && this.state.author) {
  //     API.saveBook({
  //       title: this.state.title,
  //       author: this.state.author,
  //       synopsis: this.state.synopsis
  //     })
  //       .then(res => this.loadBooks())
  //       .catch(err => console.log(err));
  //   }
  // };

  handleClick(choice) {
    let numQuestions = this.state.dataSet.length;
    console.log(numQuestions);
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 })
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 })
    }

    if (this.state.current === numQuestions) {
      this.setState({ current: 0 })
      this.setState({ incorrect: 0 })
      this.setState({ correct: 0 })
    } else {
      this.setState({ current: this.state.current + 1 })
    }
  }

  render() {
    return (
      <Container fluid>
        {/* <Row>
          <QuizPage>
            {str}
          </QuizPage>
        </Row> */}
        <div>
          <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
          <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />
        </div>
      </Container>
    );
  }
} // end extended component

function Question(props) {
  var style = {
    color: "white",
  }
  return (
    <h3 style={style}>{props.dataSet.question}</h3>
  )
}

function Answer(props) {
  var style = {
    width: "100%",
    height: 30,
    color: "blue"
  }
  return (
    <div>
      <button style={style} onClick={() => props.handleClick(props.choice)}>{props.answer}</button>
    </div>
  )
}

function AnswerList(props) {
  let answers = []
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(<Answer choice={i} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  return (
    <div>
      {answers}
    </div>
  )
}

function QuizArea(props) {
  let style = {
    width: "15%",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    float: "center",
    padding: "0 2em"
  }
  return (
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  )
}

function TotalCorrect(props) {
  let style = {
    display: "inline-block",
    padding: "1em",
    background: "#eee",
    margin: "0 .5em 0 0"
  }
  return (
    <h2 style={style}>Correct: {props.correct}</h2>
  )
}

function TotalIncorrect(props) {
  var style = {
    display: "inline-block",
    padding: "1em",
    background: "#eee",
    margin: "0 0 0 1em"
  }
  return (
    <h2 style={style}>Incorrect: {props.incorrect}</h2>
  )
}

function ScoreArea(props) {
  var style = {
    width: "100%",
    display: "block",
    textAlign: "left",
    float: "left",
    padding: "1em"
  }
  return (
    <div style={style} >
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  )
}

// ReactDOM.render(
//   <Quiz />,
//   document.getElementById("root")
// )

export default Quiz;
