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
      userId: 0,
      quizId: 0,
      userAnswer: '', 
      score: 0
    }
    this.handleClick = this.handleClick.bind(this)

  } // end constructor


  componentDidMount() {
    this.questionData1();
    // this.loadBooks();
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
    let numQuestions = this.state.dataSet.length;
    console.log("number of questions");
    console.log(numQuestions);

    // figure out if they picked the right answer
    if (choice === this.state.dataSet[this.state.current].correct) {
      console.log(this.state.dataSet[this.state.current].correct)
      this.setState({ 
        correct: this.state.correct + 1,
        score: this.state.score +1
      })
    } else {
      console.log(this.state.dataSet[this.state.current].correct)
      this.setState({ 
        incorrect: this.state.incorrect + 1,
        score: 0
      })

    }
    console.log("score for this question");
    console.log(this.state.score);
        // event.preventDefault();
    let answerData = {
      // id: this.state.id,
        //HOW DO WE GET USER ID??????
      userId: this.state.userId,
      quizId: this.state.current +1,
      userAnswer: choice, 
        //SCORE ISN'T READING OUT RIGHT
      score: this.state.score
    }
    console.log(answerData)
// ADDING DATA TO DATABASE?????????
    fetch("/api/results", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(answerData)
    }).then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(answerData) {
        console.log(answerData)    
        if(answerData == "success"){
          console.log("score added");  
        }
    }).catch(err => console.log(err));
    


      // end game if out of questions
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

  // logChange(e) {
  //   this.setState({[e.target.name]: e.target.value});  
  // }




  // import Validation from 'react-validation';
  // import "../validation.js";
    
                  // <Validation.components.Form onClick={this.handleClick} method="POST">
                  //     <label>Name</label>

                    // MIGHT NEED STUFF FROM THIS...
                      // <Validation.components.Input onChange={this.logChange}  value=''  name='answerChoice' validations={['required']}/>

                      // <div className="submit-section">
                      //     <Validation.components.Button className="btn btn-uth-submit">Submit</Validation.components.Button>
                      // </div>
                  // </Validation.components.Form>

  render() {
    console.log(this.state)
    console.log(this.state.current)
    console.log(this.state.dataSet[this.state.current])
    // console.log(this.state.dataSet.length)
    // console.log(this.state.current === (this.state.dataSet.length - 1))
    return (
      <Container fluid>
        <Row>
          <QuizPage>
            <div>
              <h2>{this.state.message}</h2>
              <ScoreArea correct={this.state.correct} incorrect={this.state.incorrect} />
              {this.state.playing && <QuizArea handleClick={this.handleClick} method="POST" dataSet={this.state.dataSet[this.state.current]} />}
            </div>
          </QuizPage>
        </Row>
      </Container>
    );
  }
} // end extended component


function Question(props) {
  let style = {
    color: "white",
  }
  return (
    <h3 style={style} class="question">{props.dataSet.question}</h3>
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
    <div class="answer btn my-2 my-sm-0" >
      {answers}
    </div>
  )
}

function QuizArea(props) {
  let style = {
    width: "30%",
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
