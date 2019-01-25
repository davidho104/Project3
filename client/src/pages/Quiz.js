import React, { Component } from "react";
import QuizPage from "../components/QuizPage";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

let str = "Quiz Page";

// use this template
// https://codepen.io/Daanist/pen/LjLoWV

// MOVE FUNCTIONS BACK HERE AT END

class Quiz extends Component {

  // state = {
  //   books: [],
  //   title: "",
  //   author: "",
  //   synopsis: ""
  // };


  // componentDidMount() {
  //   this.questionData1();
  //   // this.loadBooks();
  // }



  questionData1 = () => {
    console.log();
    API.getQuizData()
      .then(res => {
        console.log("here is the data for quizzes")
        console.log(res.data);
        let numberOfQuestions = res.data.length;
        console.log("The number of question is...")
        console.log(numberOfQuestions);
        let dataSet1 = [];
        for (let i = 0; i < numberOfQuestions; i++) {
          console.log(res.data[i].question);
          // convert choices to array
          let arrayOfChoices;
          // console.log(res.data[i].choices);
          arrayOfChoices = res.data[i].choices.split(', ');
          // console.log(arrayOfChoices);
          console.log("answer below");
          console.log(res.data[i].answer);
          dataSet1[i] = {
            question: res.data[i].question,
            answers: arrayOfChoices,
            correct: res.data[i].answer
          };
        }
        console.log("dataSet1");
        console.log(dataSet1)
        this.setState({
          dataSet: dataSet1
        })
      })
      .catch(err => console.log(err));
  };
  
  constructor(props) {
    super(props)

    this.state = {
      current: 0,
      dataSet: [],
      correct: 0,
      playing: true,
      incorrect: 0,
      message: "Answer These Questions"
    }

    this.questionData1();


    this.handleClick = this.handleClick.bind(this)

    // let dataSet = [
    //   {
    //     question: "What is 8 x 1?",
    //     answers: [
    //       "1",
    //       "8",
    //       "16",
    //       "9"
    //     ],
    //     correct: "8"
    //   },
    //   {
    //     question: "Who is Steve Jobs?",
    //     answers: [
    //       "CEO of Microsoft",
    //       "Barber in NY",
    //       "Movie Star",
    //       "CEO of Apple"
    //     ],
    //     correct: "CEO of Apple"
    //   },
    //   {
    //     question: "Metallica is a ____ band",
    //     answers: [
    //       "Blues",
    //       "Hard-Rock",
    //       "Jazz",
    //       "Metal"
    //     ],
    //     correct: "Metal"
    //   },
    // ];

  } // end constructor

  handleClick(choice) {
    let numQuestions = this.state.dataSet.length;
    console.log(numQuestions);
    if (choice === this.state.dataSet[this.state.current].correct) {
      console.log(this.state.dataSet[this.state.current].correct)
      this.setState({ correct: this.state.correct + 1 })
    } else {
      console.log(this.state.dataSet[this.state.current].correct)
      this.setState({ incorrect: this.state.incorrect + 1 })
    }

    if (this.state.current === numQuestions - 1) {
      this.setState({ message: "Quiz Over" })
      this.setState({
        playing: false
      })
      // this.setState.dataSet.question({""})
      // this.setState({ current: 0 })
      // this.setState({ incorrect: 0 })
      // this.setState({ correct: 0 })
    } else {
      this.setState({ current: this.state.current + 1 })
    }
  }

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

  render() {
    console.log(this.state)
    console.log(this.state.current)
    console.log(this.state.dataSet[this.state.current])
    // console.log(this.state.dataSet.length)
    // console.log(this.state.current === (this.state.dataSet.length - 1))
    return (
      <Container fluid>
        {/* <Row>
          <QuizPage>
            {str}
          </QuizPage>
        </Row> */}
        <div>
          <h2>{this.state.message}</h2>
          <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
          {this.state.playing && <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />}
        </div>
      </Container>
    );
  }
} // end extended component


function Question(props) {
  let style = {
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
    answers.push(<Answer choice={props.dataSet.answers[i]} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
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




export default Quiz;
