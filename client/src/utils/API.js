import axios from "axios";

export default {
 
  // Saves a user's scores to the database
  saveChoice: function (userResult) {
      return axios.post("/api/results", userResult);
  },
  // Gets User Scores
  getData: function () {
    return axios.get("/api/userscore");
  },

  
  // Gets specific User 
  getUserByEmail: function (email) {
    return axios.get("/api/users/" + email );
  },

  checkRoleByEmail: function (email) {
    return axios.get("/api/checkrole/" + email );
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
