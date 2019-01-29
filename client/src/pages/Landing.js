import React, { Component } from "react";
import LandingPage from "../components/LandingPage";
// import API from "../utils/API";
// import { Link } from "react-router-dom";

var str = "hi";

class Landing extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  
  render() {
    return (
      <LandingPage>
        {str}
      </LandingPage>
    );
  }
}

export default Landing;
