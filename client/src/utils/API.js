import axios from "axios";

export default {
  // Gets all books
  getBooks: function () {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function (id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  },
  // Saves a user's scores to the database
  saveChoice: function (userResult) {
      return axios.post("/api/results", userResult);
  },
  // Gets User Scores
  getData: function () {
    return axios.get("/api/userscore");
  },
  // Gets Get data on correct questions
  getData2: function () {
    return axios.get("/api/quizscore");
  },
  // Gets Get data which problems were incorrect. 
  getData3: function () {
    return axios.get("/api/userincorrect");
  },
  // Gets quiz questions and answers. 
  getQuizData: function () {
    return axios.get("/api/quizzes");
  },
  // Get one quiz
  getOneQuiz: function (id) {
    return axios.get("/api/quizzes/" + id);
  },
  saveQuizData: function (quizData) {
    return axios.post("/api/quizzes", quizData);
  }
};
