import React, { Component } from "react";
import QuizPage from "../components/QuizPage";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import NavTabsEmployee from "../components/NavTabsEmployee";
import '../style.css';

// use this template
// https://codepen.io/Daanist/pen/LjLoWV

function Question(props) {
  let style = {
    color: "blue",
    width: "40%",
    position: 'absolute', left: '10%',
    transform: 'translate(-15%)'
  }
  return (
    <h3 style={style} class="question">{props.dataSet.question}</h3>
  )
}

// radio buttons in answer box
function Answer(props) {
  let style = {
    width: "100%",
    height: 40,
    color: "blue",
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
    answers.push(<Answer key={`answer-${i}`} choice={props.dataSet.answers[i]} handleClick={props.handleClick} answer={props.dataSet.answers[i]} />)
  }
  return (
    <div class="answer btn my-2 my-sm-0" >
      {answers}
    </div>
  )
}

function QuizArea(props) {
  let style = {
    width: "60%",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    float: "right",
    padding: "2em",
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
    align: "text-center",
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
  let style = {
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
  let style = {
    width: "100%",
    display: "block",
    textAlign: "center",
    float: "center",
    padding: "1em"
  }
  return (
    <div style={style} >
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  )
}

class Quiz extends Component {

  constructor(props) {
    super(props)

    let dataSet = [
      {
        question: "Place-Holder Question To Make Things Work",
        answers: [
          "1",
          "8",
          "16",
          "9"
        ],
        correct: 8
      },
    ];


    this.state = {
      current: 0,
      dataSet: dataSet,
      correct: 0,
      playing: true,
      incorrect: 0,
      message: "Answer These Questions",
      id: 0,
      userId: props.id,
      firstname: props.firstname,
      uid: props.uid,
      quizId: 0,
      userAnswer: '',
      score: 0
    }
    this.handleClick = this.handleClick.bind(this)

  } // end constructor

  componentDidMount() {
    this.questionData1();
  }

  questionData1 = () => {
    API.getQuizData()
      .then(res => {
        // console.log("here is the data for quizzes")
        // console.log(res.data);
        let numberOfQuestions = res.data.length;
        // console.log("The number of question is...")
        // console.log(numberOfQuestions);
        let dataSet1 = [];
        for (let i = 0; i < numberOfQuestions; i++) {
          // console.log(res.data[i].question);
          // convert choices to array
          let arrayOfChoices;
          // console.log(res.data[i].choices);
          arrayOfChoices = res.data[i].choices.split(', ');
          // console.log(arrayOfChoices);
          // console.log("answer below");
          // console.log(res.data[i].answer);
          dataSet1[i] = {
            question: res.data[i].question,
            answers: arrayOfChoices,
            correct: res.data[i].answer
          };
        }
        console.log("Array of Questions");
        console.log(dataSet1)
        this.setState({
          dataSet: dataSet1
        })
      })
      .catch(err => console.log(err));
  };

  handleClick(choice) {
    // event.preventDefault();
    let numQuestions = this.state.dataSet.length;
    // console.log("number of questions");
    // console.log(numQuestions);
    // score, correct, incorrect
    // figure out if they picked the right answer

    const handleSubmit = () => {
      // ADDING DATA TO DATABASE
      API.saveChoice({
        userId: this.state.userId,
        quizId: this.state.current,
        userAnswer: choice,
        score: this.state.score
      })
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }

    if (choice === this.state.dataSet[this.state.current].correct) {
      console.log(choice === this.state.dataSet[this.state.current].correct)
      console.log("User Picked: " + choice);
      console.log("Correct Answer: " + this.state.dataSet[this.state.current].correct);
      this.setState({
        correct: this.state.correct + 1,
        score: 1
      },
        () => handleSubmit())
    } else {
      console.log("User Picked: " + choice);
      console.log("Correct Answer: " + this.state.dataSet[this.state.current].correct);
      this.setState({
        incorrect: this.state.incorrect + 1,
        message: "The Correct Answer for the last question is " + this.state.dataSet[this.state.current].correct,
        score: 0,
      },
        () => handleSubmit()
      )
    }

    // end game if out of questions
    if (this.state.current === numQuestions - 1) {
      this.setState({
        playing: false
      })
    }
    this.setState({ current: this.state.current + 1 })

  }


  // ------ RENDER --------------------------------

  render() {
    console.log(this.state)
    console.log(this.state.current)
    console.log(this.state.dataSet[this.state.current])
    // console.log(this.state.dataSet.length)
    // console.log(this.state.current === (this.state.dataSet.length - 1))
    return (
      <Container fluid>
      <NavTabsEmployee />
      <div className='opacContainer' >
        <Row>
          <h1 >Hi, {this.state.firstname}, </h1>
          <QuizPage >
            <div>
              <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
              <h2>{this.state.message}</h2>
              {this.state.playing && <QuizArea handleClick={this.handleClick} dataSet={this.state.dataSet[this.state.current]} />}
            </div>
          </QuizPage>
        </Row>
        </div>
      </Container>
    );
  }
} // end extended component

export default Quiz;
