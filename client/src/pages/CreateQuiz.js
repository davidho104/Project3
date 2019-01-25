import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";

import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import { FormBtn } from "../components/Form";
// import BookDetail from "../components/BookDetail";

var title = "";
var author = "";
var description = "";
var image = "";
var link = "";

class CreateQuiz extends Component {
  state = {
    quizzes: [],
    search: ""
  };


  componentDidMount() {
    this.getQuizzes();
  }

  // searching Google Book:
  // title - res.data.items[0].volumeInfo.title
  // authors - res.data.items[0].volumeInfo.authors);
  // description - res.data.items[0].volumeInfo.description
  // image - res.data.items[0].volumeInfo.imageLinks.smallThumbnail
  // link - res.data.items[0].selfLink);
  getQuizzes = () => {
    API.getQuizData()
      .then(res => {
        // console.log(res);
        this.setState({ result: res });
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
  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   this.searchBooks(this.state.search);
  // };


  handleSaveSubmit = event => {
    if (title && author) {
      API.saveBook({
        title: title,
        author: author,
        description: description,
        image: image,
        link: link
      })
        .then(res => { console.log(res) })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            {this.state.result.map(item => {
                
             return <Card key={item.volumeInfo.title} heading={item.volumeInfo.title}>

                <h3>{item.volumeInfo.authors}</h3>
                <p>{item.volumeInfo.description}</p>
                <div><img src={item.volumeInfo.imageLinks.thumbnail} alt=""></img></div>
                <div>
                  <a href={item.selfLink}>Google Book JSON</a>
                </div>
                <div>
                  <FormBtn
                    disabled={!(item.volumeInfo.authors && item.volumeInfo.title)}
                    onClick={() => {
                      title = item.volumeInfo.title;
                      author = item.volumeInfo.authors[0];
                      description = item.volumeInfo.description;
                      image = item.volumeInfo.imageLinks.thumbnail;
                      link = item.selfLink
                      this.handleSaveSubmit();
                    }}
                  >
                    Save
              </FormBtn>
                </div>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default CreateQuiz;
