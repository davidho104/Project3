import React, { Component } from "react";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Row, Container } from "../components/Grid";
import NavTabsEmployee from "../components/NavTabsEmployee";
import Jumbotron from "../components/Jumbotron";

var str = "Greetings!  Welcome to your first day at the Dunder Mifflin Paper Company.";

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: props.id,
      firstname: props.firstname,
      picture: '',
      userName: '',
      table: []
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
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
      <NavTabsEmployee />
        <Row>
          <Jumbotron>
        <h2>Greetings! {this.state.firstname}. Welcome to your first day at the Dunder Mifflin Paper Company.</h2>
        <div class="instructions1">
          <h2>This is your first assignment: click on Quiz tab above.</h2>
        </div>
        </Jumbotron>
        </Row>
      </Container>
    );
  }
}

export default Employee;
