import React, { Component } from "react";
import HomePage from "../components/HomePage";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
import '../style.css';

var str = "hi";
class Home extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  
  render() {
    return (

        <HomePage className='opacContainer'>
             {str}
        </HomePage>

    );
  }
}

export default Home;
